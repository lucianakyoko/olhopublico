import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Politico {
  id: string;
  name: string;
  party: string;
  state: string;
  photoUrl: string;
  presence: number;
  projects: number;
  house: 'Câmara' | 'Senado';
  position?: string;
}

interface PoliticosGridProps {
  politicos: Politico[];
  title?: string;
  count?: number;
}

export function PoliticsGrid({ 
  politicos, 
}: PoliticosGridProps) {
  return (
    <div>
      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {politicos.map((politico) => (
          <Card 
            key={politico.id} 
            className="overflow-hidden hover:shadow-md transition-all duration-200 group border border-gray-100"
          >
            <CardContent className="p-6">
              <div className="flex gap-4">
                {/* Foto */}
                <div className="relative w-20 h-20 shrink-0">
                  <img
                    src={politico.photoUrl}
                    alt={politico.name}
                    className="rounded-full object-cover ring-2 ring-gray-100"
                  />
                </div>

                {/* Informações */}
                <div className="flex-1 min-w-0">
                  {/* Badges de Partido e Estado */}
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {politico.party}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {politico.state}
                    </Badge>
                  </div>

                  {/* Nome */}
                  <h3 className="font-semibold text-base leading-tight mb-4 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                    {politico.name}
                  </h3>

                  {/* Estatísticas */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs tracking-widest">PRESENÇA</p>
                      <p className="font-bold text-emerald-600 text-2xl">
                        {politico.presence}%
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs tracking-widest">PROPOSIÇÕES</p>
                      <p className="font-bold text-gray-900 text-2xl">
                        {politico.projects.toString().padStart(2, '0')}
                      </p>
                    </div>
                  </div>

                  {/* Botão */}
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 text-sm font-medium"
                    asChild
                  >
                    <a href={`/politico/${politico.id}`}>
                      Ver Perfil Completo
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
