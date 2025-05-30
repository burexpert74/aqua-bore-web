
import React, { useState, useEffect } from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getBlogPosts, BlogPost } from './getBlogPosts';

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
        // Берем только первые 3 статьи для сайдбара
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar - floating for all screen sizes */}
      <div className={`
        fixed top-0 left-0 h-full w-80 sm:w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Новости и статьи</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="space-y-4 sm:space-y-6">
              {blogPosts.length === 0 ? (
                <div className="text-center text-gray-500">
                  <p>Загрузка статей...</p>
                </div>
              ) : (
                blogPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="border-b border-gray-200 pb-4 sm:pb-6 last:border-b-0 cursor-pointer"
                    onClick={() => handlePostClick(post.slug)}
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
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
          <div className="p-4 sm:p-6 border-t">
            <button
              onClick={handleViewAllBlogs}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <span>Все статьи</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
