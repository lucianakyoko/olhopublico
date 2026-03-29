'use client';

import { useState } from 'react';
import { PoliticsHeader } from "@/components/politics/PoliticsHeader";
import { PoliticsFilters } from "@/components/politics/PoliticsFilters";
import { PoliticsPagination } from "@/components/politics/PoliticsPagination";
import { PoliticsGrid } from "@/components/politics/PoliticsGrid";
import { PoliticsTable } from "@/components/politics/PoliticsTable";

import { mockDeputados, mockSenadores } from '@/lib/mockData';

export default function PoliticosPage() {
  const [selectedHouse, setSelectedHouse] = useState<'camara' | 'senado'>('camara');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const currentPoliticos = selectedHouse === 'camara' ? mockDeputados : mockSenadores;
  const currentTitle = selectedHouse === 'camara' 
    ? "Representantes Federais" 
    : "Senadores da República";
  const currentCount = selectedHouse === 'camara' ? 513 : 81;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Cabeçalho com Toggle */}
        <PoliticsHeader 
          viewMode={viewMode} 
          onViewModeChange={setViewMode}
          title={currentTitle}
          count={currentCount}
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          
          {/* Sidebar de Filtros */}
          <div className="lg:w-80 flex-shrink-0">
            <PoliticsFilters 
              selectedHouse={selectedHouse} 
              onHouseChange={setSelectedHouse} 
            />
          </div>

          {/* Conteúdo Principal */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <PoliticsGrid 
                politicos={currentPoliticos} 
                title={currentTitle} 
                count={currentCount} 
              />
            ) : (
              <PoliticsTable 
                politicos={currentPoliticos}
                title={currentTitle} 
                count={currentCount} 
              />
            )}
            
            <PoliticsPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
