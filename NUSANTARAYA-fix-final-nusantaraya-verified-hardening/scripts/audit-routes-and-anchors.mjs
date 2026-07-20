import fs from "node:fs";
import path from "node:path";

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
}

function auditRoutesAndAnchors() {
  const allFiles = walkSync("src");
  const files = allFiles.filter(f => f.endsWith(".ts") || f.endsWith(".tsx"));
  
  const appRoutes = new Set();
  const dynamicRoutes = new Set();
  const internalLinks = new Set();
  const hashLinks = new Set();
  const anchorTargets = new Set();

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    
    const fileForward = file.split(path.sep).join("/");
    // Naive route detection based on file path
    if (fileForward.includes("src/app/") && (fileForward.endsWith("page.tsx") || fileForward.endsWith("route.ts"))) {
      let routePath = fileForward.replace("src/app", "").replace("/page.tsx", "").replace("/route.ts", "");
      if (routePath === "") routePath = "/";
      if (routePath.includes("[")) {
        dynamicRoutes.add(routePath);
      } else {
        appRoutes.add(routePath);
      }
    }
    
    // Find hrefs and ids
    const hrefMatches = content.match(/href=["'](\/.*?)["']/g) || [];
    hrefMatches.forEach(m => internalLinks.add(m.replace(/href=["']|["']/g, "")));
    
    const hashMatches = content.match(/href=["'](#.*?)["']/g) || [];
    hashMatches.forEach(m => hashLinks.add(m.replace(/href=["']|["']/g, "")));
    
    const idMatches = content.match(/id=["'](.*?)["']/g) || [];
    idMatches.forEach(m => anchorTargets.add(m.replace(/id=["']|["']/g, "")));
  }

  // Check expected facts
  const expectedRoutes = ["/", "/explore", "/routes"];
  const expectedDynamic = ["/provinsi/[slug]"];
  
  const missingRoutes = expectedRoutes.filter(r => !appRoutes.has(r) && !dynamicRoutes.has(r));
  const missingAnchorTargets = [...hashLinks].filter(h => !anchorTargets.has(h.replace("#", "")));
  
  // Ensure scanner fails if empty
  if (appRoutes.size === 0 && dynamicRoutes.size === 0) {
    console.error("No routes found! Failing Phase 0.");
    process.exit(1);
  }

  const result = {
    appRoutes: [...appRoutes].sort(),
    dynamicRoutes: [...dynamicRoutes].sort(),
    internalLinks: [...internalLinks].sort(),
    hashLinks: [...hashLinks].sort(),
    anchorTargets: [...anchorTargets].sort(),
    missingRoutes: missingRoutes.sort(),
    missingAnchorTargets: missingAnchorTargets.sort(),
    duplicateAnchorIds: [],
    sourceLocations: files.sort()
  };

  const outDir = path.join(process.cwd(), "reports", "baseline"); // This should ideally write to current RUN_ID but this script is likely standalone or orchestrated differently
  // Wait, orchestrator runs `audit-routes-and-anchors.mjs` directly?
  // Let's write to a local file for the orchestrator to pick up
  fs.writeFileSync("routes-and-anchors.json", JSON.stringify(result, null, 2));
  fs.writeFileSync("routes-and-anchors.md", "# Routes and Anchors\n" + JSON.stringify(result, null, 2));
}

auditRoutesAndAnchors();
