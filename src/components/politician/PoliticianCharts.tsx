import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Politician {
  id: string;
  name: string;
  house: 'Câmara' | 'Senado';
}

interface PoliticianChartsProps {
  politician?: Politician | null;
}

export default function PoliticianCharts({ politician }: PoliticianChartsProps) {
  // Proteção contra politician undefined/null
  if (!politician) {
    return (
      <div className="p-8 text-center text-gray-500">
        Carregando dados do político...
      </div>
    );
  }

  const isDeputy = politician.house === 'Câmara';

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Performance Charts</h2>
        <p className="text-gray-600">
          Análise visual de atividade legislativa e gastos parlamentares
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Propostas por Mês */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-4">Propostas por Mês (2024)</h3>
            <div className="h-80 bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-300">
              <p className="text-gray-400 text-center">
                Line Chart - Quantidade de propostas apresentadas<br />
                <span className="text-xs">(Recharts será implementado aqui)</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Gastos Mensais */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Evolução de Gastos Mensais</h3>
              <Badge variant="secondary">
                {isDeputy ? 'CEAP (Deputado)' : 'CEAPS (Senador)'}
              </Badge>
            </div>
            <div className="h-80 bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-300">
              <p className="text-gray-400 text-center">
                Line Chart - Gastos mensais (R$)<br />
                <span className="text-xs">(Recharts será implementado aqui)</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Distribuição de Gastos por Categoria */}
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="font-medium mb-6">Distribuição de Gastos por Categoria</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-sm text-gray-500 mb-4">Principais categorias de gasto</p>
                <div className="space-y-5">
                  {isDeputy ? (
                    <>
                      <div className="flex justify-between items-center">
                        <span>Passagens Aéreas</span>
                        <span className="font-medium">34%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full w-[34%]" />
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Divulgação de Atividade</span>
                        <span className="font-medium">25%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full w-[25%]" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <span>Passagens e Locomoção</span>
                        <span className="font-medium">39%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full w-[39%]" />
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Contratação de Pessoal</span>
                        <span className="font-medium">31%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full w-[31%]" />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center border border-dashed">
                <p className="text-gray-400 text-center">
                  Donut Chart - Distribuição percentual de gastos<br />
                  <span className="text-xs">(Recharts será usado aqui)</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
