import fs from 'fs';
import path from 'path';

async function run() {
  console.log('Validating route contracts...');
  try {
    const registryPath = path.join(process.cwd(), 'src', 'app', 'routes', 'registry.ts');
    if (fs.existsSync(registryPath)) {
      const registry = require(registryPath);
      const presets = registry.ROUTE_PRESETS || [];
      console.log(`Validating ${presets.length} presets against contracts...`);
      // Baseline validation
      let fails = 0;
      for (const p of presets) {
        if (!p.id) { console.error('Preset missing ID'); fails++; }
        if (!p.region) { console.error(`Preset ${p.id} missing region`); fails++; }
        if (!p.duration) { console.error(`Preset ${p.id} missing duration`); fails++; }
      }
      if (fails > 0) {
        console.error(`${fails} contract violations found`);
        process.exit(1);
      }
    }
  } catch (err) {
    console.error('Error in route contract validation:', err);
    process.exit(1);
  }
}

run();
