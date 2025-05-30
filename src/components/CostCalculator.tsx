
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Drill, Clock, MapPin } from 'lucide-react';

const CostCalculator = () => {
  const [diameter, setDiameter] = useState(200);
  const [depth, setDepth] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const [soilType, setSoilType] = useState('normal');

  const baseRates = {
    normal: 150, // руб за м³
    hard: 200,   // руб за м³
    rocky: 300,  // руб за м³
  };

  const calculatedCost = useMemo(() => {
    const volume = (Math.PI * Math.pow(diameter / 1000 / 2, 2)) * depth * quantity;
    const rate = baseRates[soilType as keyof typeof baseRates];
    const baseCost = volume * rate;
    
    // Минимальная стоимость за выезд
    const minCost = 3000;
    
    return Math.max(baseCost, minCost);
  }, [diameter, depth, quantity, soilType]);

  const estimatedTime = useMemo(() => {
    const timePerMeter = soilType === 'rocky' ? 30 : soilType === 'hard' ? 20 : 15; // минут
    const totalTime = depth * quantity * timePerMeter;
    return Math.ceil(totalTime / 60); // часы
  }, [depth, quantity, soilType]);

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
          <Calculator className="h-6 w-6 text-blue-600" />
          <span>Калькулятор стоимости</span>
        </CardTitle>
        <p className="text-gray-600">
          Рассчитайте примерную стоимость бурения
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="diameter" className="flex items-center space-x-2">
              <Drill className="h-4 w-4" />
              <span>Диаметр (мм)</span>
            </Label>
            <Input
              id="diameter"
              type="number"
              value={diameter}
              onChange={(e) => setDiameter(Number(e.target.value))}
              min="100"
              max="1000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="depth">Глубина (м)</Label>
            <Input
              id="depth"
              type="number"
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              min="0.5"
              max="50"
              step="0.5"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Количество ям</Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max="100"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="soilType">Тип грунта</Label>
            <select
              id="soilType"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="normal">Обычный</option>
              <option value="hard">Плотный</option>
              <option value="rocky">Скалистый</option>
            </select>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">
                {calculatedCost.toLocaleString()} ₽
              </div>
              <div className="text-sm text-gray-600">Примерная стоимость</div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-green-600">
                <Clock className="h-5 w-5" />
                <span>{estimatedTime} ч</span>
              </div>
              <div className="text-sm text-gray-600">Время работы</div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-1 text-2xl font-bold text-purple-600">
                <MapPin className="h-5 w-5" />
                <span>Бесплатно</span>
              </div>
              <div className="text-sm text-gray-600">Выезд по городу</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Внимание:</strong> Это предварительный расчет. 
              Точная стоимость определяется после осмотра объекта.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostCalculator;
