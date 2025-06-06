
import React from 'react';
import { BookOpen } from 'lucide-react';

interface BlogToggleProps {
  onClick: () => void;
}

const BlogToggle: React.FC<BlogToggleProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-600 text-white p-3 sm:p-3 md:p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-200 hover:scale-105 active:scale-95 touch-manipulation"
      title="Открыть блог"
      aria-label="Открыть блог"
    >
      <BookOpen className="h-6 w-6 sm:h-6 sm:w-6 md:h-7 md:w-7" />
    </button>
  );
};

export default BlogToggle;
