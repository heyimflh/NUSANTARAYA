const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");
const crypto = require("node:crypto");
const puppeteer = require("C:/temp/telemetry/node_modules/puppeteer");

const routesToCapture = [
  { path: "/", file: "home" },
  { path: "/explore", file: "explore" },
  { path: "/routes", file: "routes" },
  { path: "/provinsi/bali", file: "atlas-bali" }
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 }
];

async function run() {
  const runIdPath = process.argv[2]; // basePath from orchestrator
  if (!runIdPath) {
    console.error("No base path provided");
    process.exit(1);
  }

  const browserDir = path.join(runIdPath, "browser");
  const screenshotsDir = path.join(runIdPath, "screenshots");
  fs.mkdirSync(browserDir, { recursive: true });
  fs.mkdirSync(screenshotsDir, { recursive: true });

  console.log("Starting dev server...");
  const devServer = spawn("npm", ["run", "dev"], { stdio: "pipe", shell: true });
  
  let serverReady = false;
  for (let i = 0; i < 45; i++) {
    try {
      const res = await fetch("http://localhost:3000");
      if (res.ok) {
        serverReady = true;
        break;
      }
    } catch (e) {
      // ignore
    }
    await new Promise(r => setTimeout(r, 2000));
  }

  if (!serverReady) {
    console.error("Dev server did not become ready.");
    devServer.kill();
    process.exit(1);
  }

  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: "new" });
  
  const consoleMessages = [];
  const pageErrors = [];
  const failedRequests = [];
  const errorResponses = [];
  const routeStatuses = [];
  const screenshotsManifest = [];

  for (const route of routesToCapture) {
    for (const vp of viewports) {
      console.log(`Capturing ${route.path} on ${vp.name}...`);
      const page = await browser.newPage();
      
      const client = await page.target().createCDPSession();
      await client.send('Network.enable');
      await client.send('Log.enable');
      
      client.on('Log.entryAdded', entry => {
        if (entry.entry.level === 'error') {
          consoleMessages.push({ route: route.path, text: entry.entry.text });
        }
      });
      
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleMessages.push({ route: route.path, text: msg.text() });
        }
      });
      page.on('pageerror', err => {
        pageErrors.push({ route: route.path, error: err.message });
      });
      page.on('requestfailed', request => {
        failedRequests.push({ route: route.path, url: request.url(), errorText: request.failure()?.errorText });
      });
      page.on('response', response => {
        if (response.status() >= 400) {
          errorResponses.push({ route: route.path, url: response.url(), status: response.status() });
        }
      });

      await page.setViewport({ width: vp.width, height: vp.height });
      
      let httpStatus = 0;
      try {
        const response = await page.goto(`http://localhost:3000${route.path}`, { waitUntil: 'networkidle0', timeout: 15000 });
        httpStatus = response?.status() || 0;
        routeStatuses.push({ route: route.path, status: httpStatus });
      } catch (e) {
        console.error(`Failed to navigate to ${route.path}:`, e);
      }
      
      const fileName = `${route.file}-${vp.name}.png`;
      const filePath = path.join(screenshotsDir, fileName);
      
      await page.screenshot({ path: filePath });
      
      const stat = fs.statSync(filePath);
      const fileBuffer = fs.readFileSync(filePath);
      const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
      
      screenshotsManifest.push({
        file: fileName,
        route: route.path,
        viewport: { width: vp.width, height: vp.height },
        fileSize: stat.size,
        sha256: hash,
        httpStatus,
        verified: stat.size > 0 && httpStatus === 200
      });
      
      await page.close();
    }
  }

  await browser.close();
  devServer.kill();

  fs.writeFileSync(path.join(browserDir, "console-messages.json"), JSON.stringify(consoleMessages, null, 2));
  fs.writeFileSync(path.join(browserDir, "page-errors.json"), JSON.stringify(pageErrors, null, 2));
  fs.writeFileSync(path.join(browserDir, "failed-requests.json"), JSON.stringify(failedRequests, null, 2));
  fs.writeFileSync(path.join(browserDir, "error-responses.json"), JSON.stringify(errorResponses, null, 2));
  fs.writeFileSync(path.join(browserDir, "route-statuses.json"), JSON.stringify(routeStatuses, null, 2));
  fs.writeFileSync(path.join(browserDir, "screenshots-manifest.json"), JSON.stringify(screenshotsManifest, null, 2));
  
  console.log("Telemetry captured.");
  
  // Force kill Next.js server on Windows
  try {
    require('node:child_process').execSync('for /f "tokens=5" %a in (\'netstat -aon ^| find "3000"\') do taskkill /f /pid %a >nul 2>&1');
  } catch (e) {
    // Ignore errors if no process is found
  }
  
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
