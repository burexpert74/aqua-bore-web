import React, { useState } from 'react';

/* START SLUGS */
export const slugs = [
  "effektivnoe-burenie-yamoburom-sekrety-professionalov",
  "innovacii-v-burenii-fundamentov-yamoburami-v-uralskom-regione",
  "innovacionnye-metody-bureniya-i-montazha-fundamentov-vybor-spectehniki",
  "luchshie-tehnicheskie-resheniya-dlya-bureniya-i-montazha-svaj-v-chelyabinske",
  "montazh-fundamentov-na-svajnyh-i-stolbchatyh-osnovaniyah",
  "montazh-svajnyh-i-stolbchatyh-fundamentov-tehnicheskie-sekrety-i-luchshie-praktiki",
  "nadezhny-fundament-tehnologii-bureniya-i-montazh-svay-v-chelyabinske",
  "praktichnaya-spectehnika-dlya-stroitelstva-i-zemlyanyh-rabot",
  "sekrety-professionalnogo-bureniya-yamobur-ot-burekspert",
  "sovremennye-tehnologii-bureniya-i-montazha-fundamentov",
  "sovremennye-tehnologii-montazha-fundamentov-i-bureniya-yam-pod-zabory",
  "spectehnika-v-stroitelstve-i-burenii-prakticheskoe-rukovodstvo",
  "tehnologii-bureniya-i-montazh-fundamentov-polnyy-gid-ot-burekspert",
  "top-5-innovacij-dlya-effektivnogo-bureniya-svaj-v-chelyabinske",
  "top-5-tehnologiy-bureniya-i-montazha-svay-dlya-stroitelstva",
  "yamobury-burilno-kranovaya-tekhnika-prakticheskie-keysy-i-sovety",
  "yamobury-tekhnicheskie-tonkosti-i-top-5-resheniy-chelyabinsk"
];
/* END SLUGS */

// ---------- Fallback Images ----------
const fallbackImages = [
  '/blog/img/fallback-1.jpg',
  '/blog/img/fallback-2.jpg',
  '/blog/img/fallback-3.jpg',
  '/blog/img/fallback-4.jpg',
  '/blog/img/fallback-5.jpg',
  '/blog/img/fallback-6.png',
  '/blog/img/fallback-7.png',
  '/blog/img/fallback-8.png',
  '/blog/img/fallback-9.jpg',
  '/blog/img/fallback-10.jpg',
  '/blog/img/fallback-11.jpg',
  '/blog/img/fallback-12.jpg',
  '/blog/img/fallback-13.jpg',
  '/blog/img/fallback-14.jpg',
  '/blog/img/fallback-15.jpg',
  '/blog/img/fallback-16.jpg',
  '/blog/img/fallback-17.jpg',
  '/blog/img/fallback-18.jpg',
  '/blog/img/fallback-19.jpg',
  '/blog/img/fallback-20.png',
  '/blog/img/fallback-21.png'
];

// Стабильная привязка slug к fallback-изображению
const slugToImageMap = new Map<string, string>();

function getFallbackImageForSlug(slug) {
  const hash = slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return fallbackImages[hash % fallbackImages.length];
}

// ---------- Utility Functions ----------
function isValidImageUrl(url: string): boolean {
  if (!url || typeof url !== 'string' || url.trim() === '') {
    return false;
  }
  
  // Проверяем, что это похоже на URL изображения
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const lowerUrl = url.toLowerCase();
  
  return imageExtensions.some(ext => lowerUrl.includes(ext)) || 
         lowerUrl.startsWith('data:image/') ||
         lowerUrl.includes('/image/') ||
         lowerUrl.includes('/img/');
}

// ---------- React Image Component ----------
interface ImageWithFallbackProps {
  src: string;
  alt: string;
  slug?: string;
  className?: string;
  fallbackSrc?: string;
}

export const ImageWithFallback = ({
  src,
  alt,
  slug,
  className = '',
  fallbackSrc,
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = (e) => {
    // предотвращаем зацикливание onError
    if (e.target.src !== (fallbackSrc || getFallbackImageForSlug(slug))) {
      setImgSrc(fallbackSrc || getFallbackImageForSlug(slug));
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

export interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

export async function getBlogPosts() {
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const res = await fetch(`/blog/${slug}.json`);
      if (!res.ok) return null; // если файла нет — не показываем пост вообще
      const data = await res.json();
      return {
        ...data,
        slug,
        image: getFallbackImageForSlug(slug),
      };
    })
  );
  return posts.filter(Boolean).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogPost(slug) {
  const res = await fetch(`/blog/${slug}.json`);
  if (!res.ok) throw new Error('Post not found');
  const data = await res.json();
  return { ...data, slug, image: getFallbackImageForSlug(slug), };
}
