
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getBlogPost } from '@/components/getBlogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPostData {
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
        setPost(postData);
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
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center">
            <p className="text-lg text-gray-600">Загрузка статьи...</p>
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
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center">
            <p className="text-lg text-red-600">{error || 'Статья не найдена'}</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 transition-colors"
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
      
      <article className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Вернуться к блогу
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          
          <div className="p-6 sm:p-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="text-lg text-gray-600 mb-8">
              {post.excerpt}
            </div>

            {post.html && (
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
