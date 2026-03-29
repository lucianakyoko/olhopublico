import { Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PoliticsHeaderProps {
  viewMode: 'grid' | 'table';
  onViewModeChange: (mode: 'grid' | 'table') => void;
  title: string;
  count: number;
}

export function PoliticsHeader({
  viewMode,
  onViewModeChange,
  title,
  count
}: PoliticsHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-600 mt-2">
          {count} {title.includes('Senadores') ? 'senadores' : 'deputados'} ativos.
        </p>
      </div>

      <div className="flex items-center gap-2 bg-white p-1 rounded-lg border">
        <Button
          variant={viewMode === 'grid' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('grid')}
          className="gap-2 cursor-pointer"
        >
          <Grid3X3 size={18} />
          Grade
        </Button>
        <Button
          variant={viewMode === 'table' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onViewModeChange('table')}
          className="gap-2 cursor-pointer"
        >
          <List size={18} />
          Tabela
        </Button>
      </div>
    </div>
  );
}
