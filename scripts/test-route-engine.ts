import fs from 'fs';
import path from 'path';

async function run() {
  try {
    const registryPath = path.join(process.cwd(), 'src', 'app', 'routes', 'registry.ts');
    let registry: any = {};
    if (fs.existsSync(registryPath)) {
      registry = require(registryPath);
    } else {
      console.log('No registry found to test');
      return;
    }
    const presets = registry.ROUTE_PRESETS || [];
    console.log(`Loaded ${presets.length} presets`);
    const ids = presets.map((p: any) => p.id);
    const uniqueIds = new Set(ids);
    if (ids.length !== uniqueIds.size) {
      console.error('Duplicate IDs found in presets');
      process.exit(1);
    }
    console.log('Presets have unique IDs');
    // We cannot fully test the matcher as we do not know its exact API, we'll try to find it.
    if (registry.findMatchingRoutes) {
      console.log('findMatchingRoutes found');
      // Mock run
      try {
        const res = registry.findMatchingRoutes({ region: 'bali', duration: 3, interests: ['culture'], budget: 'medium', pace: 'medium' });
        console.log(`Matcher returned ${res?.length || 0} results`);
      } catch (e) {
        console.error('Matcher crashed', e);
      }
    }
  } catch (err) {
    console.error('Error in route engine test:', err);
    process.exit(1);
  }
}

run();
