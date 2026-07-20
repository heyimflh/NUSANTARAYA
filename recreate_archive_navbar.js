const fs = require('fs');
const path = require('path');

const navbarPath = path.resolve('src/components/archive/ArchiveNavbar.tsx');
const routesNavbarPath = path.resolve('src/components/routes/RoutesNavbar.tsx');
let code = fs.readFileSync(routesNavbarPath, 'utf-8');

// Replace component name
code = code.replace(/RoutesNavbar/g, 'ArchiveNavbar');

// Replace links array
code = code.replace(
  /\['Beranda', 'Eksplorasi', 'Rute', 'Passport', 'Kuliner', 'Tentang'\]/g,
  "['Beranda', 'Eksplorasi', 'Rute', 'Passport', 'Arsip']"
);

// Replace mapping logic precisely
code = code.replace(
  /idx === 0 \? "\/" :\s*idx === 1 \? "\/explore" :\s*idx === 2 \? "\/routes" :\s*idx === 3 \? "\/passport" : "#"/g,
  'idx === 0 ? "/" : idx === 1 ? "/explore" : idx === 2 ? "/routes" : idx === 3 ? "/passport" : idx === 4 ? "/archive" : "#"'
);

// Replace active state
code = code.replace(/idx === 2 \/\/ Set Rute as active/g, 'idx === 4 // Set Arsip as active');

// Replace Right Button (desktop)
code = code.replace(/<RouteSectionLink section="planner"/g, '<Link href="#archive-results"');
code = code.replace(/<\/RouteSectionLink>/g, '</Link>');
code = code.replace(/import \{ RouteSectionLink \} from "@\/components\/routes\/RouteSectionLink";\n/g, '');
code = code.replace(/Buat Rute/g, 'Cari Arsip');

// Replace Mobile Menu Links mapping
code = code.replace(
  /i === 0 \? "\/" :\s*i === 1 \? "\/explore" :\s*i === 2 \? "\/routes" :\s*i === 3 \? "\/passport" : "#"/g,
  'i === 0 ? "/" : i === 1 ? "/explore" : i === 2 ? "/routes" : i === 3 ? "/passport" : i === 4 ? "/archive" : "#"'
);

// Replace Mobile Menu Button
code = code.replace(/<RouteSectionLink\s+section="planner"/g, '<Link href="#archive-results"');
// Wait, the mobile button doesn't use RouteSectionLink in RoutesNavbar, it uses <Link href="#planner">
code = code.replace(/href="#planner"/g, 'href="#archive-results"');

fs.writeFileSync(navbarPath, code);
console.log('Fixed ArchiveNavbar.tsx');
