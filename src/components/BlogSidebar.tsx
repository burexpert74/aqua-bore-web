
import React, { useState, useEffect } from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getBlogPosts } from './getBlogPosts';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

interface BlogSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts.slice(0, 3));
      } catch (error) {
        console.error('Error fetching blog posts for sidebar:', error);
      }
    };

    if (isOpen) {
      fetchPosts();
    }
  }, [isOpen]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short'
    });
  };

  const handleViewAllBlogs = () => {
    navigate('/blog');
    onClose();
  };

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 md:bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar - полная ширина на мобильных, ограниченная на десктопе */}
      <div className={`
        fixed top-0 left-0 h-full w-full sm:w-80 md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header - адаптивный отступ */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b bg-white sticky top-0 z-10">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Новости и статьи</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors touch-manipulation"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5 md:h-6 md:w-6 text-gray-500" />
            </button>
          </div>

          {/* Content - оптимизированный скролл для мобильных */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 -webkit-overflow-scrolling-touch">
            <div className="space-y-4 md:space-y-6">
              {blogPosts.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mb-2"></div>
                  <p className="text-sm md:text-base">Загрузка статей...</p>
                </div>
              ) : (
                blogPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="border-b border-gray-200 pb-4 md:pb-6 last:border-b-0 cursor-pointer group transition-all duration-200 active:bg-gray-50 rounded-lg p-2 -m-2"
                    onClick={() => handlePostClick(post.slug)}
                  >
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 group-active:text-blue-700 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>

          {/* Footer - улучшенная кнопка для мобильных */}
          <div className="p-4 md:p-6 border-t bg-white">
            <button
              onClick={handleViewAllBlogs}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 md:py-3 px-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 text-sm md:text-base font-medium touch-manipulation"
            >
              <span>Все статьи</span>
              <ExternalLink className="h-4 w-4 flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
