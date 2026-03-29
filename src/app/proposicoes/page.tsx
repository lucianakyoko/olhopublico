'use client';

import { useState } from 'react';
import { mockProposicoes, Proposicao } from '@/lib/mockData';
import { ProposicoesFilters } from '@/components/propositions/ProposicoesFilters';
import { ProposicoesCard } from '@/components/propositions/ProposicoesCard';
import { ProposicoesPagination } from '@/components/propositions/ProposicoesPagination';
import { ProposicaoModal } from '@/components/propositions/ProposicaoModal';


export default function ProposicoesPage() {
  const [selectedCasa, setSelectedCasa] = useState<'Câmara' | 'Senado' | 'Todas'>('Todas');
  const [selectedProposicao, setSelectedProposicao] = useState<Proposicao | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar proposições conforme seleção
  const filteredProposicoes = selectedCasa === 'Todas' 
    ? mockProposicoes 
    : mockProposicoes.filter(p => p.casa === selectedCasa);

  const handleCardClick = (proposicao: Proposicao) => {
    setSelectedProposicao(proposicao);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProposicao(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="w- lg:max-w-7xl mx-auto px-6 py-10">
        {/* Header da Página */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Proposições Legislativas</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Acompanhe o fluxo de leis, decretos e emendas em tempo real. 
            A transparência no processo legislativo é o alicerce da democracia.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar - Filtros */}
          <div className="lg:w-80 shrink-0">
            <ProposicoesFilters 
              selectedCasa={selectedCasa} 
              onCasaChange={setSelectedCasa} 
            />
          </div>

          {/* Lista de Proposições */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              {filteredProposicoes.map((proposicao) => (
                <ProposicoesCard 
                  key={proposicao.id}
                  proposicao={proposicao}
                  onClick={handleCardClick}
                />
              ))}
            </div>

            {/* Paginação */}
            <ProposicoesPagination currentPage={1} totalPages={15} />
          </div>
        </div>
      </div>

      {/* Modal de Detalhes */}
      <ProposicaoModal 
        proposicao={selectedProposicao} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}
