// src/components/politicos/PoliticosGrid.tsx
import Image from 'next/image';
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
}

const mockPoliticos: Politico[] = [
  {
    id: '1',
    name: 'Ricardo Oliveira da Silva',
    party: 'PL',
    state: 'SP',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    presence: 94,
    projects: 12,
    house: 'Câmara',
  },
  {
    id: '2',
    name: 'Ana Beatriz Fernandes',
    party: 'PT',
    state: 'MG',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    presence: 88,
    projects: 24,
    house: 'Câmara',
  },
  {
    id: '3',
    name: 'Carlos Eduardo Mello',
    party: 'UNIÃO',
    state: 'RJ',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    presence: 91,
    projects: 8,
    house: 'Câmara',
  },
  {
    id: '4',
    name: 'Helena Marques',
    party: 'PSOL',
    state: 'RS',
    photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    presence: 98,
    projects: 42,
    house: 'Câmara',
  },
  {
    id: '5',
    name: 'Roberto Azevedo',
    party: 'MDB',
    state: 'BA',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    presence: 82,
    projects: 15,
    house: 'Câmara',
  },
  {
    id: '6',
    name: 'Julio César Rocha',
    party: 'REDE',
    state: 'PE',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    presence: 96,
    projects: 31,
    house: 'Câmara',
  },
];

export function PoliticsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockPoliticos.map((politico) => (
        <Card key={politico.id} className="overflow-hidden hover:shadow-md transition-shadow group">
          <CardContent className="p-6">
            <div className="flex gap-4">
              {/* Foto */}
              <div className="relative w-20 h-20 flex-shrink-0">
                <img
                  src={politico.photoUrl}
                  alt={politico.name}
                  className="rounded-full object-cover ring-2 ring-gray-100"
                />
              </div>

              {/* Informações */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary" className="text-xs">
                    {politico.party}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {politico.state}
                  </Badge>
                </div>

                <h3 className="font-semibold text-base leading-tight mb-4 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {politico.name}
                </h3>

                {/* Estatísticas */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs">PRESENÇA</p>
                    <p className="font-bold text-emerald-600 text-xl">{politico.presence}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">PROPOSIÇÕES</p>
                    <p className="font-bold text-gray-900 text-xl">{politico.projects}</p>
                  </div>
                </div>

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
  );
}
