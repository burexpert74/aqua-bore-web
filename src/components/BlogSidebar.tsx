
import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getBlogPosts } from './getBlogPosts';

interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

interface BlogSidebarProps {
  className?: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Показываем только на главной странице
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      const fetchPosts = async () => {
        try {
          const posts = await getBlogPosts();
          // Берем только первые 3 статьи для сайдбара
          setBlogPosts(posts.slice(0, 3));
        } catch (error) {
          console.error('Error fetching blog posts for sidebar:', error);
        }
      };
      fetchPosts();
    }
  }, [isHomePage]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short'
    });
  };

  const handleViewAllBlogs = () => {
    navigate('/blog');
  };

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  if (!isHomePage) return null;

  return (
    <div className={`
      fixed left-4 top-1/2 transform -translate-y-1/2 z-30 w-80
      ${className}
    `}>
      <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-lg border border-gray-200">
        <div className="flex flex-col h-full max-h-96">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Статьи блога</h3>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {blogPosts.length === 0 ? (
                <div className="text-center text-gray-500">
                  <p className="text-sm">Загрузка статей...</p>
                </div>
              ) : (
                blogPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="border-b border-gray-200 pb-3 last:border-b-0 cursor-pointer group"
                    onClick={() => handlePostClick(post.slug)}
                  >
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 
                      group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleViewAllBlogs}
              className="w-full flex items-center justify-center space-x-2 
                bg-blue-600 text-white py-2 px-3 rounded-lg 
                hover:bg-blue-700 transition-colors text-sm"
            >
              <span>Все статьи</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
