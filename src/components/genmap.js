import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const slugsJsonPath = path.resolve(__dirname, './slugs.json');  // путь к json с массивом slug'ов
const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml');
const baseUrl = 'https://www.burexert.com';

// Читаем и парсим JSON с массивом slug'ов
const slugs = JSON.parse(fs.readFileSync(slugsJsonPath, 'utf-8'));

const urls = slugs.map(slug => `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
  </url>
`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urls}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemap.trim());

console.log('✅ sitemap.xml создан!');
