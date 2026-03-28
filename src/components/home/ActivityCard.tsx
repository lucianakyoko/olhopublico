// src/components/home/ActivityCard.tsx
import { TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ActivityCard() {
  return (
    <Card className="w-80 shadow-xl border-0 bg-white">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
            <TrendingUp className="h-7 w-7 text-emerald-600" />
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">ATIVIDADE HOJE</p>
            <p className="text-3xl font-bold text-gray-900">+124 Votações</p>
            <p className="text-sm text-gray-600 leading-tight">
              O Congresso registrou um aumento de 15% na atividade parlamentar nas últimas 24h.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
