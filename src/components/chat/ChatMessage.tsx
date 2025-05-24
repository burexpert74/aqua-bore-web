
import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '@/types/chat';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          message.isBot
            ? 'bg-gray-100 text-gray-800'
            : 'bg-blue-600 text-white'
        }`}
      >
        <div className="flex items-start space-x-2">
          {message.isBot ? (
            <Bot className="h-4 w-4 mt-0.5 text-blue-600" />
          ) : (
            <User className="h-4 w-4 mt-0.5" />
          )}
          <span className="text-sm whitespace-pre-line">{message.text}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
