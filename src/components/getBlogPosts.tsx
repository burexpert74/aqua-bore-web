import React, { useState } from 'react';

/* START SLUGS */
export const slugs = [
  "effektivnye-tehnologii-bureniya-yam-i-montazha-stolbov",
  "innovacionnye-metody-bureniya-i-montazha-fundamentov-vybor-spectehniki",
  "kak-pravilno-podgotovit-uchastok-k-bureniyu-yamoburom",
  "kak-pravilno-vybrat-yamobur-dlya-nadjozhnogo-fundamenta",
  "kak-vybrat-idealnyy-yamobur-dlya-slozhnyh-gruntov",
  "montazh-fundamentov-na-svajnyh-i-stolbchatyh-osnovaniyah",
  "montazh-svajnyh-i-stolbchatyh-fundamentov-tehnicheskie-sekrety-i-luchshie-praktiki",
  "nadezhny-fundament-tehnologii-bureniya-i-montazh-svay-v-chelyabinske",
  "praktichnaya-spectehnika-dlya-stroitelstva-i-zemlyanyh-rabot",
  "sovremennye-tehnologii-montazha-fundamentov-i-bureniya-yam-pod-zabory",
  "spectehnika-v-stroitelstve-i-burenii-prakticheskoe-rukovodstvo",
  "tehnologii-bureniya-i-montazha-fundamentov-ekspertnyj-vzglyad-bureksperta"
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

// Последовательная ротация с привязкой к slug
let currentImageIndex = 0;
const slugToImageMap = new Map<string, string>();

function getNextFallbackImage(): string {
  const image = fallbackImages[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % fallbackImages.length;
  return image;
}

function getFallbackImageForSlug(slug: string): string {
  // Если уже назначили изображение этому slug - возвращаем то же
  if (slugToImageMap.has(slug)) {
    return slugToImageMap.get(slug)!;
  }
  
  // Назначаем следующее по порядку
  const image = getNextFallbackImage();
  slugToImageMap.set(slug, image);
  return image;
}

// ---------- Cached Image Existence Check ----------
const CACHE_DURATION = 5 * 60 * 1000; // 5 минут

interface CacheEntry {
  exists: boolean;
  timestamp: number;
}

const imageCache = new Map<string, CacheEntry>();

async function imageExists(url: string): Promise<boolean> {
  const now = Date.now();
  const cached = imageCache.get(url);

  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return cached.exists;
  }

  try {
    const res = await fetch(url, { method: 'HEAD' });
    const exists = res.ok;
    imageCache.set(url, { exists, timestamp: now });
    return exists;
  } catch {
    imageCache.set(url, { exists: false, timestamp: now });
    return false;
  }
}

// ---------- React Image Component ----------
interface ImageWithFallbackProps {
  src: string;
  alt: string;
  slug?: string;               // Добавил slug для выбора fallback по статье
  className?: string;
  fallbackSrc?: string;        // Можно задать кастомный fallback
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  slug,
  className = '',
  fallbackSrc,
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // fallbackSrc или стабильный fallback по slug или первый из fallbackImages
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
        if (!res.ok) return null;

        const data = await res.json();

        const hasImage = typeof data.image === 'string' && data.image.trim() !== '';
        const validImage = hasImage && await imageExists(data.image);
        const image = validImage ? data.image : getFallbackImageForSlug(slug);

        return {
          id: data.id,
          title: data.title,
          excerpt: data.excerpt,
          image,
          date: data.date,
          readTime: data.readTime,
          slug: data.slug,
        };
      } catch (error) {
        console.error(`Error loading blog post ${slug}:`, error);
        return null;
      }
    })
  );

  // Фильтруем null и сортируем по дате (новее вперед)
  return posts.filter((p): p is BlogPost => p !== null).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  try {
    const res = await fetch(`/blog/${slug}.json`);
    if (!res.ok) throw new Error('Post not found');

    const data = await res.json();

    const hasImage = typeof data.image === 'string' && data.image.trim() !== '';
    const validImage = hasImage && await imageExists(data.image);

    if (!validImage) {
      data.image = getFallbackImageForSlug(slug);
    }

    return data;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    throw error;
  }
}
