
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatBot = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/gpt_noway_bot', '_blank');
  };

  return (
    <button
      onClick={handleTelegramClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 touch-manipulation"
      title="Написать в Telegram"
      aria-label="Написать в Telegram"
    >
      <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  );
};

export default ChatBot;
