
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatBot = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/gpt_noway_bot', '_blank');
  };

  return (
    <button
      onClick={handleTelegramClick}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      title="Написать в Telegram"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
};

export default ChatBot;
