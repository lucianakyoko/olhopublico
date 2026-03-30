import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, ShieldCheck } from 'lucide-react';

interface Politician {
  id: string;
  name: string;
  party: string;
  state: string;
  photoUrl: string;
  house: 'Câmara' | 'Senado';
}

interface PoliticianOverviewProps {
  politician: Politician;
}

export default function PoliticianOverview({ politician }: PoliticianOverviewProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Content - Left Side */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">PROJETOS DE LEI</p>
                    <p className="text-4xl font-bold text-gray-900 mt-2">142</p>
                    <p className="text-sm text-gray-500 mt-1">Total</p>
                  </div>
                  <div className="text-emerald-600">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full mt-6 overflow-hidden">
                  <div className="h-full w-[85%] bg-emerald-600 rounded-full" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">PRESENÇA EM SESSÕES</p>
                    <p className="text-4xl font-bold text-emerald-600 mt-2">94%</p>
                    <p className="text-sm text-gray-500 mt-1">Média</p>
                  </div>
                  <div className="text-blue-600">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full mt-6 overflow-hidden">
                  <div className="h-full w-[94%] bg-emerald-600 rounded-full" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">GASTOS ESTE MÊS</p>
                    <p className="text-4xl font-bold text-amber-600 mt-2">R$ 28k</p>
                    <p className="text-sm text-gray-500 mt-1">CEAP</p>
                  </div>
                  <div className="text-amber-600">
                    <DollarSign className="h-8 w-8" />
                  </div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full mt-6 overflow-hidden">
                  <div className="h-full w-[60%] bg-amber-600 rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Chart */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Atividade Legislativa (2024)</h3>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full" />
                    <span>Proposições</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    <span>Votos</span>
                  </div>
                </div>
              </div>
              
              {/* Placeholder for Chart */}
              <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed border-gray-300">
                <p className="text-gray-400">Gráfico de atividade mensal virá aqui (Recharts)</p>
              </div>
            </CardContent>
          </Card>

          {/* Últimas Proposições */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Últimas Proposições</h3>
                <Button variant="ghost" className="text-emerald-700">Ver todas →</Button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex justify-between">
                    <p className="font-medium">PL 1240/2024</p>
                    <span className="text-xs text-gray-500">15 MAI 2024</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    Dispõe sobre a obrigatoriedade de painéis solares em prédios públicos federais para redução de custos energéticos.
                  </p>
                  <p className="text-xs text-emerald-600 mt-3">AGUARDANDO RELATOR</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex justify-between">
                    <p className="font-medium">PL 892/2024</p>
                    <span className="text-xs text-gray-500">28 ABR 2024</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    Institui o Programa Nacional de Alfabetização Digital para idosos em áreas remotas e rurais.
                  </p>
                  <p className="text-xs text-emerald-600 mt-3">APROVADO NA CCJ</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Right Side */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Fronts of Action */}
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4">FRENTE DE ATUAÇÃO</h4>
              <div className="flex flex-wrap gap-2">
                {['Educação', 'Tecnologia', 'Meio Ambiente', 'Economia Digital', 'Segurança'].map((area) => (
                  <Badge key={area} variant="secondary" className="text-sm px-4 py-1.5">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Votes */}
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4">VOTOS RECENTES</h4>
              <div className="space-y-5 text-sm">
                <div className="flex gap-3">
                  <div className="text-green-600">👍</div>
                  <div>
                    <p className="font-medium">PEC 45/2019 - Reforma Tributária</p>
                    <p className="text-gray-500 text-xs">VOTOU: SIM • 18 MAI</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-red-600">👎</div>
                  <div>
                    <p className="font-medium">PL 2630 - Fake News</p>
                    <p className="text-gray-500 text-xs">VOTOU: NÃO • 18 MAI</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dados Oficiais */}
          <Card className="bg-emerald-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6" />
                <h4 className="font-semibold">Dados Oficiais e Transparentes</h4>
              </div>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Estas informações são extraídas diretamente das APIs da Câmara dos Deputados e do Senado Federal.
              </p>
              <Button variant="secondary" className="mt-6 w-full bg-white text-emerald-700 hover:bg-gray-100">
                VER FONTES
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
