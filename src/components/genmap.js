import slugs from '../../src/components/slugs.json' assert { type: 'json' };
import fs from 'fs';
import path from 'path';


// Пути
const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml');
const baseUrl = 'https://www.burexert.com';

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
