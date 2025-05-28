
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, date, readTime, slug }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Link to={`/blog/${slug}`} className="block">
      <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-40 sm:h-48 object-cover"
          />
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
            {readTime}
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
            {title}
          </h3>
          
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{formatDate(date)}</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Читать далее</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
