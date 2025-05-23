
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, Filter } from 'lucide-react';

type PriceItem = {
  id: number;
  service: string;
  depth: string | number;
  price: string | number;
};

const PriceList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepth, setFilterDepth] = useState<string>("all");
  
  const priceItems: PriceItem[] = [
    { id: 1, service: "Бурение диаметр 200 мм", depth: 1, price: 350 },
    { id: 2, service: "Бурение диаметр 300 мм", depth: 1, price: 350 },
    { id: 3, service: "Бурение диаметр 400 мм", depth: 1, price: 350 },
    { id: 4, service: "Бурение диаметр 500 мм", depth: 1, price: 400 },
    { id: 5, service: "Бурение диаметр 600 мм", depth: 1, price: 600 },
    { id: 6, service: "Бурение диаметр 200 мм", depth: 2, price: 300 },
    { id: 7, service: "Бурение диаметр 300 мм", depth: 2, price: 300 },
    { id: 8, service: "Бурение диаметр 400 мм", depth: 2, price: 300 },
    { id: 9, service: "Бурение диаметр 500 мм", depth: 2, price: 500 },
    { id: 10, service: "Бурение диаметр 600 мм", depth: 2, price: 600 },
    // Добавляем больше услуг из прайс-листа
    { id: 61, service: "Монтаж винтовых свай D 76 мм", depth: 1, price: 400 },
    { id: 62, service: "Монтаж винтовых свай D 96 мм", depth: 1, price: 400 },
    { id: 63, service: "Монтаж винтовых свай D 108 мм", depth: 1, price: 400 },
    { id: 73, service: "Монтаж опор ЛЭП деревянная", depth: "-", price: 2500 },
    { id: 74, service: "Демонтаж опор ЛЭП деревянная", depth: "-", price: 2500 },
    { id: 75, service: "Монтаж опор ЛЭП ж/б", depth: "-", price: 2500 },
    { id: 76, service: "Демонтаж опор ЛЭП ж/б", depth: "-", price: 2500 },
    { id: 77, service: "Погрузочно-разгрузочные работы", depth: "-", price: "2500 руб/час" },
    { id: 78, service: "Выезд за пределы Челябинска", depth: "-", price: "50 руб/км пути в обе стороны" },
    { id: 79, service: "Стоимость минимального заказа", depth: "-", price: 8500 },
  ];
  
  // Получаем уникальные значения глубин для фильтра
  const uniqueDepths = Array.from(new Set(priceItems.map(item => item.depth)));
  
  // Функция фильтрации
  const filteredItems = priceItems.filter(item => {
    const matchesSearch = item.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepth = filterDepth === "all" || item.depth.toString() === filterDepth;
    return matchesSearch && matchesDepth;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Полный прайс-лист услуг
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Расценки на бурение скважин разной глубины и диаметра, а также дополнительные услуги
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Поиск по услуге..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400" />
              <select 
                className="border p-2 rounded-lg bg-white"
                value={filterDepth}
                onChange={(e) => setFilterDepth(e.target.value)}
              >
                <option value="all">Все глубины</option>
                {uniqueDepths.map((depth, idx) => (
                  <option key={idx} value={depth.toString()}>
                    {depth === "-" ? "Без глубины" : `${depth} м`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>Цены действительны на май 2024 года</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12 text-center">№</TableHead>
                  <TableHead>Услуга</TableHead>
                  <TableHead className="w-32 text-center">Глубина, м</TableHead>
                  <TableHead className="w-48 text-right">Стоимость за 1 м, руб</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="text-center">{item.id}</TableCell>
                    <TableCell>{item.service}</TableCell>
                    <TableCell className="text-center">{item.depth}</TableCell>
                    <TableCell className="text-right font-medium">
                      {typeof item.price === 'number' 
                        ? new Intl.NumberFormat('ru-RU').format(item.price)
                        : item.price}
                    </TableCell>
                  </TableRow>
                ))}
                {filteredItems.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                      По вашему запросу ничего не найдено
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div className="bg-blue-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Нужен индивидуальный расчет?</h3>
          <p className="text-blue-100 mb-6">
            Свяжитесь с нашими специалистами для получения точной стоимости работ на вашем участке
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Получить расчет
          </button>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default PriceList;
