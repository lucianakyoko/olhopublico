'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, UserPlus } from 'lucide-react';

export interface Politician {
  id: string;
  name: string;
  party: string;
  state: string;
  photoUrl: string;
  house: 'Câmara' | 'Senado';
}

interface PoliticianSelectorProps {
  selectedHouse: 'Câmara' | 'Senado';
  onHouseChange: (house: 'Câmara' | 'Senado') => void;
  selectedPoliticians: Politician[];
  onAddPolitician: (politician: Politician) => void;
  onRemovePolitician: (id: string) => void;
  availablePoliticians: Politician[];
  canAddMore: boolean;
}

export default function PoliticianSelector({
  selectedHouse,
  onHouseChange,
  selectedPoliticians,
  onAddPolitician,
  onRemovePolitician,
  availablePoliticians,
  canAddMore,
}: PoliticianSelectorProps) {
  return (
    <div className="space-y-8">
      {/* Seleção de Casa Legislativa */}
      <div>
        <p className="text-sm font-medium text-gray-500 mb-3">CASA LEGISLATIVA</p>
        <div className="flex gap-3">
          <Button
            variant={selectedHouse === 'Câmara' ? 'default' : 'outline'}
            onClick={() => onHouseChange('Câmara')}
            className="flex-1 md:flex-none"
          >
            Câmara dos Deputados
          </Button>
          <Button
            variant={selectedHouse === 'Senado' ? 'default' : 'outline'}
            onClick={() => onHouseChange('Senado')}
            className="flex-1 md:flex-none"
          >
            Senado Federal
          </Button>
        </div>
      </div>

      {/* Políticos Selecionados */}
      <div>
        <p className="text-sm font-medium text-gray-500 mb-4">
          Políticos selecionados ({selectedPoliticians.length}/3)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Cards dos selecionados */}
          {selectedPoliticians.map((politician) => (
            <div
              key={politician.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-4 group"
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={politician.photoUrl}
                  alt={politician.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm line-clamp-1">{politician.name}</p>
                <p className="text-xs text-gray-500">
                  {politician.party} • {politician.state}
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-600"
                onClick={() => onRemovePolitician(politician.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}

          {/* Slot para adicionar novo político */}
          {canAddMore && (
            <div className="border border-dashed border-gray-300 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[78px] hover:border-gray-400 transition-colors cursor-pointer"
                 onClick={() => {
                   // Aqui vamos abrir um modal ou dropdown no futuro
                   alert("Em breve: seletor de políticos disponíveis");
                 }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <UserPlus className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 text-center">Adicionar Parlamentar</p>
            </div>
          )}

          {/* Slots vazios restantes */}
          {Array.from({ length: 3 - selectedPoliticians.length - (canAddMore ? 1 : 0) }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center justify-center min-h-[78px]"
            >
              <p className="text-xs text-gray-400">Slot vazio</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
