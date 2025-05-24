
import React from 'react';
import { Bot, X } from 'lucide-react';
import { Message } from '@/types/chat';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  inputText: string;
  setInputText: (text: string) => void;
  onSendMessage: () => void;
  isLoading: boolean;
}

const ChatWindow = ({
  isOpen,
  onClose,
  messages,
  inputText,
  setInputText,
  onSendMessage,
  isLoading
}: ChatWindowProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5" />
          <span className="font-semibold">Помощник БурЭксперт</span>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <ChatMessages messages={messages} isLoading={isLoading} />

      {/* Input */}
      <ChatInput
        inputText={inputText}
        setInputText={setInputText}
        onSendMessage={onSendMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ChatWindow;
