import { useState } from 'react';

import { mockDeputados, mockSenadores } from '@/lib/mockData';
import ComparatorHeader from '@/components/comparator/ComparatorHeader';
import PoliticianSelector, { Politician } from '@/components/comparator/PoliticianSelector';
import ComparisonChart from '@/components/comparator/ComparisonChart';
import ComparisonTable from '@/components/comparator/ComparisonTable';
import ComparisonHighlights from '@/components/comparator/ComparisonHighlights';

export default function ComparatorPage() {
  const [selectedHouse, setSelectedHouse] = useState<'Câmara' | 'Senado'>('Câmara');
  const [selectedPoliticians, setSelectedPoliticians] = useState<Politician[]>([]);

  const availablePoliticians = selectedHouse === 'Câmara' ? mockDeputados : mockSenadores;

  const handleAddPolitician = (politician: Politician) => {
    if (selectedPoliticians.length >= 3) return;
    if (selectedPoliticians.find(p => p.id === politician.id)) return;
    
    setSelectedPoliticians([...selectedPoliticians, politician]);
  };

  const handleRemovePolitician = (id: string) => {
    setSelectedPoliticians(selectedPoliticians.filter(p => p.id !== id));
  };

  const canAddMore = selectedPoliticians.length < 3;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Header */}
        <ComparatorHeader />

        <div className="mt-12">
          
          {/* Seletor de Políticos */}
          <PoliticianSelector 
            selectedHouse={selectedHouse}
            onHouseChange={setSelectedHouse}
            selectedPoliticians={selectedPoliticians}
            onAddPolitician={handleAddPolitician}
            onRemovePolitician={handleRemovePolitician}
            availablePoliticians={availablePoliticians}
            canAddMore={canAddMore}
          />

          {/* Área de Comparação - Só aparece quando há pelo menos 1 político selecionado */}
          {selectedPoliticians.length > 0 && (
            <div className="mt-16 space-y-16">
              
              {/* Radar Chart - Alinhamento por Temática */}
              <ComparisonChart politicians={selectedPoliticians} />

              {/* Tabela Detalhada */}
              <ComparisonTable politicians={selectedPoliticians} />

              {/* Destaques e Perfil Ideológico */}
              <ComparisonHighlights politicians={selectedPoliticians} />
            </div>
          )}

          {/* Mensagem quando nada foi selecionado */}
          {selectedPoliticians.length === 0 && (
            <div className="mt-20 text-center py-16 bg-white rounded-3xl border border-gray-100">
              <div className="mx-auto w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Comparação vazia
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Selecione até 3 políticos da mesma casa legislativa para começar a comparar 
                desempenho, presença e alinhamento de votos.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
