// src/components/home/TodayCard.tsx
import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TodayCardProps {
  house: 'Câmara' | 'Senado' | 'Comissão';
  type: string;
  number: string;
  title: string;
  description: string;
  status: 'Aprovado' | 'Em Debate' | 'Votação Urgente' | 'Em Tramitação';
  timeAgo?: string;
  isLive?: boolean;
}

export default function TodayCard({
  house,
  type,
  number,
  title,
  description,
  status,
  timeAgo,
  isLive = false,
}: TodayCardProps) {
  const getHouseColor = () => {
    if (house === 'Câmara') return 'bg-green-100 text-green-700';
    if (house === 'Senado') return 'bg-blue-100 text-blue-700';
    return 'bg-amber-100 text-amber-700';
  };

  const getStatusColor = () => {
    if (status === 'Aprovado') return 'bg-emerald-100 text-emerald-700';
    if (status === 'Em Debate' || status === 'Votação Urgente') return 'bg-orange-100 text-orange-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <Card className="h-full hover:shadow-md transition-all duration-300 group">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <Badge className={getHouseColor()} variant="secondary">
            {house}
          </Badge>
          
          {isLive && (
            <Badge variant="destructive" className="animate-pulse">
              Ao Vivo
            </Badge>
          )}
        </div>

        <div className="space-y-1">
          <p className="text-sm text-gray-500 font-medium">
            {type} {number}
          </p>
          <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-emerald-700 transition-colors">
            {title}
          </h3>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <Badge className={getStatusColor()} variant="outline">
            {status}
          </Badge>

          {timeAgo && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Clock className="h-3.5 w-3.5" />
              <span>{timeAgo}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
