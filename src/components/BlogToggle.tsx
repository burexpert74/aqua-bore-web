
import React from 'react';
import { BookOpen } from 'lucide-react';

interface BlogToggleProps {
  onClick: () => void;
}

const BlogToggle: React.FC<BlogToggleProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-20 left-4 sm:left-6 bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
      title="Открыть блог"
      aria-label="Открыть блог"
    >
      <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  );
};

export default BlogToggle;
