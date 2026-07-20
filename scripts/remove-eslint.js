const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, '../src'));
const targetComment = '// eslint-disable-next-line react-hooks/set-state-in-effect';

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  if (content.includes(targetComment)) {
    // Remove the comment lines, keeping the indentation if possible, or just replace it with empty string
    const escaped = targetComment.split('/').join('\\/').split('\\').join('\\\\');
    const regex = new RegExp('[ \\t]*' + escaped + '\\r?\\n', 'g');
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Cleaned ${file}`);
  }
});
