import { PoliticsHeader } from "@/components/politics/PoliticsHeader";
import { PoliticsFilters } from "@/components/politics/PoliticsFilters";
import { PoliticsGrid } from "@/components/politics/PoliticsGrid";
import { PoliticsPagination } from "@/components/politics/PoliticsPagination";

export default function PoliticosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Cabeçalho da página */}
        <PoliticsHeader />

        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          
          {/* Sidebar de Filtros */}
          <div className="lg:w-80 flex-shrink-0">
            <PoliticsFilters />
          </div>

          {/* Conteúdo Principal */}
          <div className="flex-1">
            <PoliticsGrid />
            <PoliticsPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
