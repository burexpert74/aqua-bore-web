// blogUtils.tsx (или index.tsx, если всё в одном)
import React, { useState } from 'react';

// ---------- Fallback Images ----------
const fallbackImages = [
  '/blog/img/fallback-1.jpg',
  '/blog/img/fallback-2.jpg',
  '/blog/img/fallback-3.jpg',
  '/blog/img/fallback-4.jpg',
  '/blog/img/fallback-5.jpg',
];

let usedFallbackImages: string[] = [];

function getFallbackImageForSlug(slug: string): string {
  const index = Math.abs(hashCode(slug)) % fallbackImages.length;
  return fallbackImages[index];
}

function hashCode(str: string): number {
  return str.split('').reduce((hash, char) => {
    return ((hash << 5) - hash) + char.charCodeAt(0);
  }, 0);
}


// ---------- Cached Image Existence Check ----------
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
  exists: boolean;
  timestamp: number;
}

const imageCache = new Map<string, CacheEntry>();

async function imageExists(url: string): Promise<boolean> {
  const now = Date.now();
  const cached = imageCache.get(url);

  if (cached && now - cached.timestamp < CACHE_DURATION) {
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
  className?: string;
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc || getRandomFallbackImage());
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

// ---------- Blog Data Fetching ----------
const potentialSlugs = [
  'arenda-yamobura-chelyabinsk-polnoe-rukovodstvo',
  'arenda-yamobora-chelyabinsk-gid-po-vyboru-i-primeneniyu',
  'arenda-yamobura-v-chelyabinske-polnyj-gid',
  'arenda-yamoburov-chelyabinsk-polnyy-gid',
];

export async function getAvailableSlugs(): Promise<string[]> {
  const validSlugs: string[] = [];

  await Promise.all(
    potentialSlugs.map(async (slug) => {
      try {
        const res = await fetch(`/blog/${slug}.json`);
        if (res.ok) validSlugs.push(slug);
      } catch {
        // ignore failed fetch
      }
    })
  );

  return validSlugs;
}

export async function getBlogPosts() {
  const slugs = await getAvailableSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const res = await fetch(`/blog/${slug}.json`);
        if (!res.ok) return null;
        const data = await res.json();

        const hasImage = data.image && data.image.trim() !== '';
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

  return posts.filter(Boolean).sort(
    (a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()
  );
}

export async function getBlogPost(slug: string) {
  try {
    const res = await fetch(`/blog/${slug}.json`);
    if (!res.ok) throw new Error('Post not found');
    const data = await res.json();

    const hasImage = data.image && data.image.trim() !== '';
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
