
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
    <Link to={`/blog/${slug}`} className="block group touch-manipulation">
      <article className="bg-white/90 md:bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border border-white/20">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-36 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium shadow-lg">
            {readTime}
          </div>
        </div>
        
        <div className="p-3 sm:p-4 md:p-6">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
            {title}
          </h3>
          
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
            <div className="flex items-center space-x-1 md:space-x-2">
              <Calendar className="h-3 w-3 md:h-4 md:w-4 text-blue-500 flex-shrink-0" />
              <span className="truncate">{formatDate(date)}</span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors">
              <Clock className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              <span className="font-medium">Читать</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
