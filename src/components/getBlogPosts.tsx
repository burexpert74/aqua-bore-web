import React, { useState } from 'react';

/* START SLUGS */
export const slugs = [
  "innovacionnye-metody-bureniya-i-montazha-fundamentov-vybor-spectehniki",
  "montazh-fundamentov-na-svajnyh-i-stolbchatyh-osnovaniyah",
  "montazh-svajnyh-i-stolbchatyh-fundamentov-tehnicheskie-sekrety-i-luchshie-praktiki",
  "nadezhny-fundament-tehnologii-bureniya-i-montazh-svay-v-chelyabinske",
  "praktichnaya-spectehnika-dlya-stroitelstva-i-zemlyanyh-rabot",
  "sovremennye-tehnologii-montazha-fundamentov-i-bureniya-yam-pod-zabory",
  "spectehnika-v-stroitelstve-i-burenii-prakticheskoe-rukovodstvo"
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
  '/blog/img/fallback-20.jpg',
  '/blog/img/fallback-21.jpg'
];

// Стабильная привязка slug к fallback-изображению
const slugToImageMap = new Map<string, string>();

function getFallbackImageForSlug(slug: string): string {
  if (slugToImageMap.has(slug)) {
    return slugToImageMap.get(slug)!;
  }
  
  // Используем хеш от slug для стабильного выбора изображения
  const hash = slug.split('').reduce((acc, char) => {
    return ((acc << 5) - acc + char.charCodeAt(0)) & 0xffffffff;
  }, 0);
  
  const imageIndex = Math.abs(hash) % fallbackImages.length;
  const image = fallbackImages[imageIndex];
  slugToImageMap.set(slug, image);
  return image;
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

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  slug,
  className = '',
  fallbackSrc,
}) => {
  // Сразу определяем, какое изображение использовать
  const shouldUseFallback = !isValidImageUrl(src);
  const initialSrc = shouldUseFallback 
    ? (fallbackSrc || (slug ? getFallbackImageForSlug(slug) : fallbackImages[0]))
    : src;
    
  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      const fallback = fallbackSrc || (slug ? getFallbackImageForSlug(slug) : fallbackImages[0]);
      setImgSrc(fallback);
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

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const res = await fetch(`/blog/${slug}.json`);
        if (!res.ok) {
          // Возвращаем пост с fallback-данными если JSON не найден
          return {
            id: slug,
            title: `Статья ${slug}`,
            excerpt: 'Описание статьи недоступно',
            image: getFallbackImageForSlug(slug),
            date: new Date().toISOString().split('T')[0],
            readTime: '5 мин',
            slug: slug,
          };
        }

        const data = await res.json();

        // Сразу используем fallback если изображение невалидно
        const image = isValidImageUrl(data.image) 
          ? data.image 
          : getFallbackImageForSlug(slug);

        return {
          id: data.id || slug,
          title: data.title || `Статья ${slug}`,
          excerpt: data.excerpt || 'Описание статьи недоступно',
          image,
          date: data.date || new Date().toISOString().split('T')[0],
          readTime: data.readTime || '5 мин',
          slug: data.slug || slug,
        };
      } catch (error) {
        console.error(`Error loading blog post ${slug}:`, error);
        // Возвращаем fallback-пост вместо null
        return {
          id: slug,
          title: `Статья ${slug}`,
          excerpt: 'Описание статьи недоступно',
          image: getFallbackImageForSlug(slug),
          date: new Date().toISOString().split('T')[0],
          readTime: '5 мин',
          slug: slug,
        };
      }
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  try {
    const res = await fetch(`/blog/${slug}.json`);
    if (!res.ok) {
      // Возвращаем fallback-пост вместо ошибки
      return {
        id: slug,
        title: `Статья ${slug}`,
        excerpt: 'Описание статьи недоступно',
        image: getFallbackImageForSlug(slug),
        date: new Date().toISOString().split('T')[0],
        readTime: '5 мин',
        slug: slug,
      };
    }

    const data = await res.json();

    const image = isValidImageUrl(data.image) 
      ? data.image 
      : getFallbackImageForSlug(slug);
    
    return {
      id: data.id || slug,
      title: data.title || `Статья ${slug}`,
      excerpt: data.excerpt || 'Описание статьи недоступно',
      image,
      date: data.date || new Date().toISOString().split('T')[0],
      readTime: data.readTime || '5 мин',
      slug: data.slug || slug,
    };

  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    // Возвращаем fallback-пост вместо выброса ошибки
    return {
      id: slug,
      title: `Статья ${slug}`,
      excerpt: 'Описание статьи недоступно',
      image: getFallbackImageForSlug(slug),
      date: new Date().toISOString().split('T')[0],
      readTime: '5 мин',
      slug: slug,
    };
  }
}
