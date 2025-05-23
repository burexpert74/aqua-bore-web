
import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

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
  const [userEmail, setUserEmail] = useState('');
  const [isCollectingEmail, setIsCollectingEmail] = useState(false);

  const botResponses = {
    greeting: "Здравствуйте! Я помощник БурЭксперт. Чем могу помочь?",
    price: "Стоимость бурения зависит от глубины и типа скважины:\n• Скважина на песок (15-50м): от 3,000 ₽/м\n• Артезианская (50-150м): от 4,500 ₽/м\n• Глубокая артезианская (150м+): от 5,500 ₽/м\n\nХотите точный расчет для вашего участка?",
    depth: "Глубина скважины зависит от геологии участка:\n• Песчаные водоносные слои: 15-50 м\n• Известняк (артезианские): 50-150 м\n• Глубокие горизонты: 150+ м\n\nДля точного определения нужна разведка.",
    time: "Сроки бурения:\n• Разведочное бурение: 1-2 дня\n• Скважина на песок: 2-3 дня\n• Артезианская: 3-5 дней\n• Глубокая артезианская: 5-7 дней",
    equipment: "Используем современное оборудование:\n• Роторные буровые установки\n• Пневмоударные системы\n• Современные обсадные трубы\n• Профессиональные насосы",
    default: "Спасибо за вопрос! Для подробной консультации рекомендую связаться с нашим специалистом. Оставьте email для связи?"
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = botResponses.default;

      if (isCollectingEmail) {
        if (inputText.includes('@')) {
          setUserEmail(inputText);
          botResponse = `Спасибо! Ваш email ${inputText} сохранен. Наш специалист свяжется с вами в ближайшее время для подробной консультации.`;
          setIsCollectingEmail(false);
        } else {
          botResponse = "Пожалуйста, укажите корректный email адрес для связи.";
        }
      } else {
        const text = inputText.toLowerCase();
        if (text.includes('цена') || text.includes('стоимость') || text.includes('сколько')) {
          botResponse = botResponses.price;
        } else if (text.includes('глубина') || text.includes('глубокая')) {
          botResponse = botResponses.depth;
        } else if (text.includes('время') || text.includes('срок') || text.includes('быстро')) {
          botResponse = botResponses.time;
        } else if (text.includes('оборудование') || text.includes('установка')) {
          botResponse = botResponses.equipment;
        } else if (text.includes('привет') || text.includes('здравствуй')) {
          botResponse = botResponses.greeting;
        } else {
          setIsCollectingEmail(true);
        }
      }

      const botMessage: Message = {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
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
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Помощник БурЭксперт</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
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
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Напишите ваш вопрос..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
