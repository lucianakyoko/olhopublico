import { Button } from '@/components/ui/button';
import { Share2, FileText } from 'lucide-react';

export default function ComparatorHeader() {
  return (
    <div>
      <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-2">
        FERRAMENTA DE TRANSPARÊNCIA
      </div>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Comparador de Atuação
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Analise o desempenho legislativo, presença em sessões e alinhamento de votos 
            entre até três parlamentares simultaneamente.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Compartilhar
          </Button>
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Exportar PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
