// src/components/home/Hero.tsx
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ActivityCard from './ActivityCard';

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-slate-50 via-white to-emerald-50 pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Conteúdo textual */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-emerald-700 bg-emerald-100 hover:bg-emerald-100 px-4 py-1.5 text-sm font-medium">
                Dados oficiais • Câmara e Senado
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 leading-tight">
                Acompanhe o que seus<br />
                representantes <span className="text-emerald-700">realmente fazem</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl">
                Transparência total sobre votações, proposições e presença no Congresso Nacional. 
                Dados oficiais transformados em informação clara e acessível para o cidadão.
              </p>
            </div>

            {/* Barra de Busca */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Busque por nome, partido ou estado..."
                  className="pl-12 h-14 text-base rounded-2xl border-gray-300 focus-visible:ring-emerald-600"
                />
              </div>
              <Button size="lg" className="h-14 px-10 rounded-2xl font-medium">
                Buscar
              </Button>
            </div>

            {/* Filtros Rápidos */}
            <div>
              <p className="text-sm text-gray-500 mb-3 font-medium">FILTROS RÁPIDOS</p>
              <div className="flex flex-wrap gap-2">
                {['Saúde', 'Economia', 'Educação', 'Segurança', 'São Paulo', 'Meio Ambiente'].map((filter) => (
                  <Badge 
                    key={filter}
                    variant="outline" 
                    className="py-4 px-3 text-sm cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-colors"
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Imagem + Activity Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Imagem principal */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop" 
                  alt="Interior do Congresso Nacional"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>

              {/* Activity Card sobreposto */}
              <div className="absolute -bottom-6 -left-4 lg:-left-6">
                <ActivityCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}