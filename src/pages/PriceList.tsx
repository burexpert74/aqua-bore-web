
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
  { id: 11, service: "Бурение диаметр 200 мм", depth: 3, price: 300 },
  { id: 12, service: "Бурение диаметр 300 мм", depth: 3, price: 300 },
  { id: 13, service: "Бурение диаметр 400 мм", depth: 3, price: 300 },
  { id: 14, service: "Бурение диаметр 500 мм", depth: 3, price: 500 },
  { id: 15, service: "Бурение диаметр 600 мм", depth: 3, price: 600 },
  { id: 16, service: "Бурение диаметр 200 мм", depth: 4, price: 350 },
  { id: 17, service: "Бурение диаметр 300 мм", depth: 4, price: 350 },
  { id: 18, service: "Бурение диаметр 400 мм", depth: 4, price: 350 },
  { id: 19, service: "Бурение диаметр 500 мм", depth: 4, price: 600 },
  { id: 20, service: "Бурение диаметр 600 мм", depth: 4, price: 700 },
  { id: 21, service: "Бурение диаметр 200 мм", depth: 5, price: 350 },
  { id: 22, service: "Бурение диаметр 300 мм", depth: 5, price: 350 },
  { id: 23, service: "Бурение диаметр 400 мм", depth: 5, price: 350 },
  { id: 24, service: "Бурение диаметр 500 мм", depth: 5, price: 700 },
  { id: 25, service: "Бурение диаметр 600 мм", depth: 5, price: 800 },
  { id: 26, service: "Бурение диаметр 200 мм", depth: 6, price: 400 },
  { id: 27, service: "Бурение диаметр 300 мм", depth: 6, price: 400 },
  { id: 28, service: "Бурение диаметр 400 мм", depth: 6, price: 400 },
  { id: 29, service: "Бурение диаметр 500 мм", depth: 6, price: 800 },
  { id: 30, service: "Бурение диаметр 600 мм", depth: 6, price: 900 },
  { id: 31, service: "Бурение диаметр 200 мм", depth: 7, price: 500 },
  { id: 32, service: "Бурение диаметр 300 мм", depth: 7, price: 500 },
  { id: 33, service: "Бурение диаметр 400 мм", depth: 7, price: 500 },
  { id: 34, service: "Бурение диаметр 500 мм", depth: 7, price: 1000 },
  { id: 35, service: "Бурение диаметр 600 мм", depth: 7, price: 1200 },
  { id: 36, service: "Бурение диаметр 200 мм", depth: 8, price: 600 },
  { id: 37, service: "Бурение диаметр 300 мм", depth: 8, price: 600 },
  { id: 38, service: "Бурение диаметр 400 мм", depth: 8, price: 600 },
  { id: 39, service: "Бурение диаметр 500 мм", depth: 8, price: 1200 },
  { id: 40, service: "Бурение диаметр 600 мм", depth: 8, price: 1500 },
  { id: 41, service: "Бурение диаметр 200 мм", depth: 9, price: 800 },
  { id: 42, service: "Бурение диаметр 300 мм", depth: 9, price: 800 },
  { id: 43, service: "Бурение диаметр 400 мм", depth: 9, price: 800 },
  { id: 44, service: "Бурение диаметр 500 мм", depth: 9, price: 1400 },
  { id: 45, service: "Бурение диаметр 600 мм", depth: 9, price: 1600 },
  { id: 46, service: "Бурение диаметр 200 мм", depth: 10, price: 1000 },
  { id: 47, service: "Бурение диаметр 300 мм", depth: 10, price: 1000 },
  { id: 48, service: "Бурение диаметр 400 мм", depth: 10, price: 1000 },
  { id: 49, service: "Бурение диаметр 500 мм", depth: 10, price: 2000 },
  { id: 50, service: "Бурение диаметр 600 мм", depth: 10, price: 2500 },
  { id: 51, service: "Бурение диаметр 200 мм", depth: 11, price: 1000 },
  { id: 52, service: "Бурение диаметр 300 мм", depth: 11, price: 1000 },
  { id: 53, service: "Бурение диаметр 400 мм", depth: 11, price: 1000 },
  { id: 54, service: "Бурение диаметр 500 мм", depth: 11, price: 2000 },
  { id: 55, service: "Бурение диаметр 600 мм", depth: 11, price: 2500 },
  { id: 56, service: "Бурение диаметр 200 мм", depth: 12, price: 1200 },
  { id: 57, service: "Бурение диаметр 300 мм", depth: 12, price: 1200 },
  { id: 58, service: "Бурение диаметр 400 мм", depth: 12, price: 1200 },
  { id: 59, service: "Бурение диаметр 500 мм", depth: 12, price: 2400 },
  { id: 60, service: "Бурение диаметр 600 мм", depth: 12, price: 3000 },
  { id: 61, service: "монтаж винтовых свай D 76 мм", depth: 1, price: 400 },
  { id: 62, service: "монтаж винтовых свай D 96 мм", depth: 1, price: 400 },
  { id: 63, service: "монтаж винтовых свай D 108 мм", depth: 1, price: 400 },
  { id: 64, service: "монтаж винтовых свай D 76 мм", depth: 2, price: 400 },
  { id: 65, service: "монтаж винтовых свай D 96 мм", depth: 2, price: 400 },
  { id: 66, service: "монтаж винтовых свай D 108 мм", depth: 2, price: 400 },
  { id: 67, service: "монтаж винтовых свай D 76 мм", depth: 3, price: 400 },
  { id: 68, service: "монтаж винтовых свай D 96 мм", depth: 3, price: 400 },
  { id: 69, service: "монтаж винтовых свай D 108 мм", depth: 3, price: 400 },
  { id: 70, service: "монтаж винтовых свай D 76 мм", depth: 4, price: 400 },
  { id: 71, service: "монтаж винтовых свай D 96 мм", depth: 4, price: 400 },
  { id: 72, service: "монтаж винтовых свай D 108 мм", depth: 4, price: 400 },
  { id: 73, service: "монтаж опор ЛЭП деревянная", depth: null, price: 2500 },
  { id: 74, service: "демонтаж опор ЛЭП деревянная", depth: null, price: 2500 },
  { id: 75, service: "монтаж опор ЛЭП ж/б", depth: null, price: 2500 },
  { id: 76, service: "демонтаж опор ЛЭП ж/б", depth: null, price: 2500 },
  { id: 77, service: "погрузочно - разгрузочные работы", depth: null, price: "2500 руб/час" },
  { id: 78, service: "выезд за пределы Челябинска", depth: null, price: "50 руб/км в обе стороны"},
    { id: 79, servuce: " стоимость минимального заказа", depth: null, price" 8500}
      ]

  
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
              <TableCaption>Цены действительны на май 2025 года</TableCaption>
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
