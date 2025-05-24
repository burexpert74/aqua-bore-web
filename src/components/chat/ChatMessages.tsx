
import React from 'react';
import { Bot } from 'lucide-react';
import { Message } from '@/types/chat';
import ChatMessage from './ChatMessage';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessages = ({ messages, isLoading }: ChatMessagesProps) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[80%]">
            <div className="flex items-center space-x-2">
              <Bot className="h-4 w-4 text-blue-600" />
              <span className="text-sm">Печатаю...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
