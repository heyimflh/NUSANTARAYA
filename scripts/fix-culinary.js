const fs = require('fs');
const path = require('path');

const itinerariesDir = path.join(__dirname, '../src/data/routes/itineraries');

const defaultCulinary = `culinaryMoments: [
          {
            culinaryId: "culinary-default-1",
            label: "Kuliner Khas Lokal",
            context: "lunch",
            note: "Menikmati sajian otentik setempat."
          }
        ],`;

const files = fs.readdirSync(itinerariesDir);

files.forEach(file => {
  if (file.endsWith('.ts')) {
    const filePath = path.join(itinerariesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Some files might have different indentation, try to match `culinaryMoments: [],` or similar
    const regex = /culinaryMoments:\s*\[\s*\]\s*,?/g;
    
    if (regex.test(content)) {
      content = content.replace(regex, defaultCulinary);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${file}`);
    }
  }
});
