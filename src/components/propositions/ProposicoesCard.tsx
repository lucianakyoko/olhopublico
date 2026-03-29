import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface Proposition {
  id: string;
  tipo: string;
  numero: string;
  ano: number;
  titulo: string;
  descricao: string;
  tema: string;
  casa: 'Câmara' | 'Senado';
  status: 'Em Tramitação' | 'Aprovada' | 'Arquivada';
  data: string;
  autor: string;
  autorCargo: string;
}

interface ProposicoesCardProps {
  proposicao: Proposition;
  onClick: (proposicao: Proposition) => void;
}

export function ProposicoesCard({ proposicao, onClick }: ProposicoesCardProps) {
  const getStatusConfig = () => {
    switch (proposicao.status) {
      case 'Aprovada':
        return { color: 'text-emerald-600', dot: 'bg-emerald-500' };
      case 'Em Tramitação':
        return { color: 'text-amber-600', dot: 'bg-amber-500' };
      case 'Arquivada':
        return { color: 'text-red-600', dot: 'bg-red-500' };
      default:
        return { color: 'text-gray-600', dot: 'bg-gray-500' };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <Card 
      className="w-full group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
      onClick={() => onClick(proposicao)}
    >
      <CardContent className="p-4">
        {/* Top Bar - Tipo + Tema + Data */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-emerald-700 text-white text-xs font-medium px-3 py-1">
              {proposicao.tipo} {proposicao.numero}/{proposicao.ano}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {proposicao.tema}
            </Badge>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar className="h-3.5 w-3.5" />
            <span>{proposicao.data}</span>
          </div>
        </div>

        {/* Título */}
        <h3 className="font-semibold text-[17px] leading-tight mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors">
          {proposicao.titulo}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-6">
          {proposicao.descricao}
        </p>

        {/* Autor */}
        <div className='flex items-center justify-between'>
          <div className="flex items-center gap-3 mt-auto">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt={proposicao.autor}
                className="object-cover"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900 leading-tight">{proposicao.autor}</p>
              <p className="text-gray-500 text-xs">{proposicao.autorCargo}</p>
            </div>
          </div>
        
          <div className="flex items-center gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${statusConfig.dot}`} />
            <span className={`font-medium ${statusConfig.color}`}>
              {proposicao.status}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
