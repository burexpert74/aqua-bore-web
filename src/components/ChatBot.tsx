import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatBot = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/burexpert_bot', '_blank');
  };

  return (
    <>
      <button
        onClick={handleTelegramClick}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 text-white p-3 sm:p-4 rounded-full hover:bg-blue-700 transition-colors z-50"
        style={{
          animation: 'pulse-ring 6s ease-out infinite',
          boxShadow: '0 0 0 0 rgba(59,130,246,0.4)',
        }}
        title="Написать в Telegram"
        aria-label="Написать в Telegram"
      >
        <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <style>
        {`
          @keyframes pulse-ring {
            0% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
            }
            40% {
              box-shadow: 0 0 0 12px rgba(59, 130, 246, 0.1);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
            }
          }
        `}
      </style>
    </>
  );
};

export default ChatBot;
