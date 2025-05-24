
import { Message } from '@/types/chat';

const WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/chatbot';

export const sendMessageToWebhook = async (message: string): Promise<string> => {
  console.log("Отправка сообщения на n8n webhook:", WEBHOOK_URL);
  
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
      timestamp: new Date().toISOString(),
      source: "БурЭксперт_ChatBot"
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Получен ответ от n8n:", data);

  // Извлекаем ответ из разных возможных форматов ответа n8n
  if (data.response) {
    return data.response;
  } else if (data.message) {
    return data.message;
  } else if (data.text) {
    return data.text;
  } else if (typeof data === 'string') {
    return data;
  } else {
    return "Получен ответ от сервера, но формат неизвестен.";
  }
};
