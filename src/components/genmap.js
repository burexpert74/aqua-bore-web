
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const slugsJsonPath = path.resolve(__dirname, './slugs.json'); // путь к json с массивом slug'ов
const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml');
const baseUrl = 'https://www.burexert.com';

// Читаем и парсим JSON с массивом slug'ов
const slugs = JSON.parse(fs.readFileSync(slugsJsonPath, 'utf-8'));

const urls = slugs.map(slug => `
<url>
<loc>${baseUrl}/blog/${slug}</loc>
<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
`).join('');


// Статические страницы
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'weekly' },     // Главная
  { url: '/blog', priority: '0.9', changefreq: 'daily' }, // Блог
  { url: '/services', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.6', changefreq: 'yearly' }
];

const staticUrls = staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`).join('');

// Объединяем статические и динамические URL'ы
const allUrls = staticUrls + urls;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls}
</urlset>
`;


fs.writeFileSync(sitemapPath, sitemap.trim());

console.log('✅ sitemap.xml создан!');
