import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getBlogPost, BlogPost } from '@/components/getBlogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPostData extends BlogPost {
  meta: {
    title: string;
    description: string;
  };
  html: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const postData = await getBlogPost(slug);
        // Добавляем недостающие поля если их нет
        const fullPostData: BlogPostData = {
          ...postData,
          meta: postData.meta || {
            title: postData.title,
            description: postData.excerpt
          },
          html: postData.html || `<div class="prose"><p>${postData.excerpt}</p></div>`
        };
        setPost(fullPostData);
      } catch (err) {
        setError('Статья не найдена');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-base md:text-lg text-gray-600">Загрузка статьи...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
          <div className="text-center">
            <p className="text-base md:text-lg text-red-600 mb-4">{error || 'Статья не найдена'}</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors touch-manipulation"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Вернуться к блогу
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <article className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 max-w-4xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center mb-4 sm:mb-6 text-blue-600 hover:text-blue-800 active:text-blue-900 transition-colors touch-manipulation"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Вернуться к блогу
        </Link>

        <div className="bg-white rounded-lg md:rounded-xl shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
            loading="eager"
          />
          
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {post.excerpt}
            </div>

            <div 
              className="prose prose-sm sm:prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-headings:leading-tight prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
