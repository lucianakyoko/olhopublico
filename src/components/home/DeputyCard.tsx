// src/components/home/DeputyCard.tsx
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface DeputyCardProps {
  name: string;
  party: string;
  state: string;
  photoUrl: string;
  projects: number;
  presence: number;
}

export default function DeputyCard({
  name,
  party,
  state,
  photoUrl,
  projects,
  presence,
}: DeputyCardProps) {
  return (
    <Card className="group hover:shadow-sm transition-all duration-200 border border-gray-100 bg-white">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {/* Foto pequena */}
          <div className="relative w-16 h-16 flex-shrink-0">
            <img
              src={photoUrl}
              alt={name}
              className="rounded-full object-cover ring-1 ring-gray-200"
            />
          </div>

          {/* Informações */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
              {name}
            </h3>
            
            <p className="text-xs text-gray-500 mt-0.5 mb-4">
              {party} • {state}
            </p>

            {/* Estatísticas */}
            <div className="space-y-3">
              {/* Projetos */}
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>PROJETOS</span>
                  <span className="font-medium text-gray-900">{projects}</span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full w-[85%]" />
                </div>
              </div>

              {/* Presença */}
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>PRESENÇA</span>
                  <span className="font-medium text-emerald-600">{presence}%</span>
                </div>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-600 rounded-full" 
                    style={{ width: `${presence}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
