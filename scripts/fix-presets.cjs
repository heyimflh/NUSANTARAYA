const fs = require('fs');

let file = fs.readFileSync('src/data/routes/routePresets.ts', 'utf8');

let stopCounter = 0;
file = file.replace(/{\s*dayStart:\s*(\d+),\s*dayEnd:\s*(\d+),\s*provinceId:\s*"([^"]+)"/g, (match, dStart, dEnd, provId) => {
    stopCounter++;
    let region = '';
    if (provId.includes('sumatera') || provId.includes('aceh') || provId.includes('riau') || provId.includes('bangka') || provId.includes('lampung') || provId.includes('bengkulu') || provId.includes('jambi')) region = 'sumatera';
    else if (provId.includes('jawa') || provId.includes('banten') || provId.includes('jakarta') || provId.includes('yogyakarta')) region = 'jawa';
    else if (provId.includes('bali') || provId.includes('nusa')) region = 'bali-nusa-tenggara';
    else if (provId.includes('kalimantan')) region = 'kalimantan';
    else if (provId.includes('sulawesi') || provId.includes('gorontalo')) region = 'sulawesi';
    else if (provId.includes('maluku')) region = 'maluku';
    else if (provId.includes('papua')) region = 'papua';
    else region = 'indonesia';

    return `{\n        id: "stop-${stopCounter}",\n        regionId: "${region}",\n        dayStart: ${dStart},\n        dayEnd: ${dEnd},\n        provinceId: "${provId}"`;
});

fs.writeFileSync('src/data/routes/routePresets.ts', file, 'utf8');
