
interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  meta?: {
    title: string;
    description: string;
  };
  html?: string;
}

const fallbackImages = [
  '/blog/img/fallback-1.jpg',
  '/blog/img/fallback-2.jpg',
  '/blog/img/fallback-3.jpg',
  '/blog/img/fallback-4.jpg',
  '/blog/img/fallback-5.jpg'
];

const getRandomFallbackImage = () => {
  const randomIndex = Math.floor(Math.random() * fallbackImages.length);
  return fallbackImages[randomIndex];
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('Fetching blog posts...');
    
    const blogFiles = [
      'arenda-yamoburov-v-chelyabinske-polnyy-gid-i-preimushchestva.json',
      'kak-vybrat-yamobur-dlya-bureniya-fundamenta-sovety-ekspertov.json',
      'nadezhny-fundament-tehnologii-bureniya-i-montazh-svay-v-chelyabinske.json',
      'spectehnika-v-stroitelstve-i-burenii-prakticheskoe-rukovodstvo.json'
    ];

    const posts: BlogPost[] = [];

    for (let i = 0; i < blogFiles.length; i++) {
      const fileName = blogFiles[i];
      try {
        console.log(`Loading blog file: ${fileName}`);
        const response = await fetch(`/blog/${fileName}`);
        
        if (!response.ok) {
          console.warn(`Failed to fetch ${fileName}: ${response.status}`);
          continue;
        }

        const post = await response.json();
        console.log('Loaded post:', post);

        // Ensure the post has all required fields
        if (post && post.title && post.excerpt && post.date && post.slug) {
          const processedPost: BlogPost = {
            id: post.id || i + 1,
            title: post.title,
            excerpt: post.excerpt,
            image: post.image || getRandomFallbackImage(),
            date: post.date,
            readTime: post.readTime || '5 мин чтения',
            slug: post.slug,
            meta: post.meta,
            html: post.html
          };
          
          posts.push(processedPost);
        } else {
          console.warn(`Invalid post structure in ${fileName}:`, post);
        }
      } catch (error) {
        console.error(`Error loading ${fileName}:`, error);
      }
    }

    console.log('Final posts array:', posts);
    
    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error in getBlogPosts:', error);
    return [];
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    console.log(`Fetching blog post with slug: ${slug}`);
    
    const posts = await getBlogPosts();
    const post = posts.find(p => p.slug === slug);
    
    if (!post) {
      console.error(`Post with slug ${slug} not found`);
      return null;
    }

    // If the post doesn't have HTML content, try to load it from the file
    if (!post.html && post.slug) {
      try {
        const fileName = `${post.slug}.json`;
        const response = await fetch(`/blog/${fileName}`);
        
        if (response.ok) {
          const fullPost = await response.json();
          if (fullPost.html) {
            post.html = fullPost.html;
          }
        }
      } catch (error) {
        console.warn(`Could not load full content for ${slug}:`, error);
      }
    }

    return post;
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
};
