// src/components/home/LegislatureSummary.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

export default function LegislatureSummary() {
  return (
    <Card className="bg-gray-900 text-white border-0 h-full">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-bold tracking-tight">
          Resumo da Legislatura
        </CardTitle>
        <p className="text-gray-400 text-sm">
          Atualização em tempo real • 56ª Legislatura
        </p>
      </CardHeader>

      <CardContent className="space-y-8">
        
        {/* Projetos em Tramitação */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium text-gray-300">Projetos em Tramitação</span>
            </div>
            <span className="text-2xl font-bold">4.291</span>
          </div>
          <Progress value={68} className="h-2 bg-gray-800" />
        </div>

        {/* Gastos Parlamentares */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium text-gray-300">Gastos Parlamentares (Mês)</span>
            </div>
            <span className="text-2xl font-bold">R$ 14,2M</span>
          </div>
          <Progress value={45} className="h-2 bg-gray-800" />
        </div>

        {/* Fidelidade Partidária Média */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-300">Fidelidade Partidária Média</span>
            <span className="text-2xl font-bold text-emerald-400">82%</span>
          </div>
          <Progress value={82} className="h-2 bg-gray-800" />
        </div>

        {/* Botão */}
        <Button 
          variant="secondary" 
          className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-100 font-medium h-12"
        >
          Explorar Base de Dados completa
        </Button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Fonte: Dados oficiais da Câmara e Senado
        </p>
      </CardContent>
    </Card>
  );
}
