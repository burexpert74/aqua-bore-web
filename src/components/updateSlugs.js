import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname аналог для ES модулей:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.resolve(__dirname, '../../public/blog');
const slugsFilePath = path.resolve(__dirname, 'getBlogPosts.tsx');

function getSlugs() {
  const files = fs.readdirSync(blogDir);
  return files
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
    .sort();
}

function updateSlugsFile(slugs) {
  let content = fs.readFileSync(slugsFilePath, 'utf-8');

  const startMarker = '/* START SLUGS */';
  const endMarker = '/* END SLUGS */';

  const regex = new RegExp(`${startMarker}[\\s\\S]*${endMarker}`, 'm');

  const newSlugsString = JSON.stringify(slugs, null, 2);

  const replacement = `${startMarker}\nexport const slugs = ${newSlugsString};\n${endMarker}`;

  if (!regex.test(content)) {
    console.error('Markers not found in getBlogPosts.tsx');
    process.exit(1);
  }

  const newContent = content.replace(regex, replacement);

  fs.writeFileSync(slugsFilePath, newContent, 'utf-8');
}

const slugs = getSlugs();
updateSlugsFile(slugs);
console.log('Slugs updated:', slugs);
