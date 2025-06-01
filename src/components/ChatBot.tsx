
import React, { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';

const ChatBot = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTelegramClick = () => {
    window.open('https://t.me/burexpert_bot', '_blank');
  };

  return (
    <button
      onClick={handleTelegramClick}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6
        bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
        text-white p-3 sm:p-4 rounded-full shadow-xl
        hover:scale-110 active:scale-95
        transition-all duration-300 z-50 touch-manipulation
        ${mounted ? 'opacity-100' : 'opacity-0'}
        animate-bounce hover:animate-none
        before:absolute before:inset-0 before:rounded-full 
        before:bg-blue-400 before:animate-ping before:opacity-75
        hover:before:animate-none
        after:absolute after:inset-0 after:rounded-full
        after:bg-gradient-to-r after:from-blue-400 after:to-blue-500
        after:animate-pulse after:opacity-50 hover:after:animate-none
      `}
      title="Написать в Telegram"
      aria-label="Написать в Telegram"
      style={{
        animation: mounted ? 'bounce 2s infinite, glow 2s ease-in-out infinite alternate' : 'none'
      }}
    >
      <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
      
      {/* Дополнительные анимированные кольца */}
      <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-20"></div>
      <div className="absolute inset-0 rounded-full border border-blue-200 animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
    </button>
  );
};

export default ChatBot;
