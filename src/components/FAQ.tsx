
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Какие типы грунта вы можете бурить?",
      answer: "Мы работаем с любыми типами грунта: песчаными, глинистыми, суглинистыми, а также с мерзлыми и скалистыми породами. Используем специализированное оборудование для каждого типа грунта."
    },
    {
      question: "Какой минимальный и максимальный диаметр бурения?",
      answer: "Диаметр бурения от 150 мм до 1200 мм. Глубина бурения до 30 метров. Конкретные параметры зависят от используемого оборудования и условий на объекте."
    },
    {
      question: "Сколько времени занимает бурение одной ямы?",
      answer: "Время бурения зависит от диаметра, глубины и типа грунта. В среднем: яма диаметром 300 мм и глубиной 2 метра в обычном грунте бурится за 15-20 минут."
    },
    {
      question: "Работаете ли вы в зимнее время?",
      answer: "Да, мы работаем круглогодично. У нас есть специальное оборудование для работы с мерзлым грунтом. Зимнее бурение может занимать больше времени, но качество работ остается на высоком уровне."
    },
    {
      question: "Убираете ли вы грунт после бурения?",
      answer: "Да, по желанию заказчика мы можем вывезти извлеченный грунт. Эта услуга оплачивается дополнительно. Также можем равномерно распределить грунт по участку."
    },
    {
      question: "Какая стоимость выезда на объект?",
      answer: "Выезд в пределах города бесплатный. За город - по договоренности, в зависимости от расстояния. Минимальная стоимость заказа составляет 3000 рублей."
    },
    {
      question: "Нужно ли готовить участок к приезду ямобура?",
      answer: "Необходимо обеспечить свободный проезд техники к месту работ (ширина проезда не менее 3 метров). Убрать препятствия в радиусе 5 метров от точек бурения. Предварительно согласовать расположение коммуникаций."
    },
    {
      question: "Предоставляете ли вы гарантию на работы?",
      answer: "Да, мы предоставляем гарантию на качество выполненных работ. Если яма не соответствует заданным параметрам по нашей вине, мы переделываем работу бесплатно."
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <HelpCircle className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Часто задаваемые вопросы
          </h2>
        </div>
        <p className="text-gray-600">
          Ответы на самые популярные вопросы о наших услугах
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-gray-200 rounded-lg px-4"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold text-gray-900">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
        <p className="text-blue-800">
          <strong>Не нашли ответ на свой вопрос?</strong>
        </p>
        <p className="text-blue-700 text-sm mt-1">
          Свяжитесь с нами по телефону или через форму обратной связи
        </p>
      </div>
    </div>
  );
};

export default FAQ;
