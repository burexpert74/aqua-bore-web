
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Message } from '@/types/chat';
import ChatWindow from './chat/ChatWindow';
import { sendMessageToWebhook } from '@/utils/webhookService';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Здравствуйте! Я помощник БурЭксперт. Расскажу о наших услугах бурения скважин. Какие вопросы вас интересуют?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const botResponseText = await sendMessageToWebhook(inputText);
      
      const botMessage: Message = {
        text: botResponseText,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("Ошибка при отправке на webhook:", error);
      
      const errorMessage: Message = {
        text: "Извините, произошла ошибка при обработке вашего сообщения. Попробуйте позже.",
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);

      toast({
        title: "Ошибка",
        description: "Не удалось получить ответ от сервера.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }

    setInputText('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        inputText={inputText}
        setInputText={setInputText}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
      />
    </>
  );
};

export default ChatBot;
