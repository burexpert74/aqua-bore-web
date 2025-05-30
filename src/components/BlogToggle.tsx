
import React from 'react';
import { BookOpen } from 'lucide-react';

interface BlogToggleProps {
  onClick: () => void;
}

const BlogToggle: React.FC<BlogToggleProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95 touch-manipulation"
      title="Открыть блог"
      aria-label="Открыть блог"
    >
      <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
    </button>
  );
};

export default BlogToggle;
