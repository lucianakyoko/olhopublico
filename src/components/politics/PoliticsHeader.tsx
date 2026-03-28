'use client';

import { useState } from 'react';
import { Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PoliticsHeader() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Representantes Federais</h1>
        <p className="text-gray-600 mt-2">
          513 deputados ativos na Câmara dos Deputados.
        </p>
      </div>

      {/* Toggle Grade / Tabela */}
      <div className="flex items-center gap-2 bg-white p-1 rounded-lg border">
        <Button
          variant={viewMode === 'grid' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setViewMode('grid')}
          className="gap-2"
        >
          <Grid3X3 size={18} />
          Grade
        </Button>
        <Button
          variant={viewMode === 'table' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setViewMode('table')}
          className="gap-2"
        >
          <List size={18} />
          Tabela
        </Button>
      </div>
    </div>
  );
}
