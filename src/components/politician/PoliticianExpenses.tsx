import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DollarSign, Calendar, Building2 } from 'lucide-react';

interface Politician {
  id: string;
  name: string;
  party: string;
  state: string;
  house: 'Câmara' | 'Senado';
}

interface PoliticianExpensesProps {
  politician: Politician;
}

export default function PoliticianExpenses({ politician }: PoliticianExpensesProps) {
  const isDeputy = politician.house === 'Câmara';

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Expenses Overview</h2>
        <p className="text-gray-600">
          {isDeputy 
            ? "Gastos via CEAP (Cota para Exercício da Atividade Parlamentar)" 
            : "Gastos via CEAPS (Cota para Exercício da Atividade Parlamentar dos Senadores)"}
        </p>
      </div>

      {/* Resumo Geral */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900">R$ 28.450</p>
                <p className="text-sm text-gray-500">Gasto este mês</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900">87%</p>
                <p className="text-sm text-gray-500">Utilização da cota</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-xl">
                <Building2 className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900">14</p>
                <p className="text-sm text-gray-500">Fornecedores</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tipo de Gasto - Diferenciado por Casa */}
      <div>
        <h3 className="text-lg font-semibold mb-6">
          {isDeputy ? "Principais Tipos de Gastos (CEAP)" : "Principais Tipos de Gastos (CEAPS)"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isDeputy ? (
            /* Gastos típicos de Deputado */
            <>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Passagens Aéreas</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">R$ 9.840</p>
                    </div>
                    <Badge variant="secondary">34%</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Divulgação de Atividade</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">R$ 7.250</p>
                    </div>
                    <Badge variant="secondary">25%</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Consultorias</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">R$ 5.100</p>
                    </div>
                    <Badge variant="secondary">18%</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Manutenção de Escritório</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">R$ 4.320</p>
                    </div>
                    <Badge variant="secondary">15%</Badge>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            /* Gastos típicos de Senador */
            <>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Passagens e Locomoção</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">R$ 11.200</p>
                    </div>
                    <Badge variant="secondary">39%</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Contratação de Pessoal</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">R$ 8.750</p>
                    </div>
                    <Badge variant="secondary">31%</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Material de Consumo</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">R$ 3.980</p>
                    </div>
                    <Badge variant="secondary">14%</Badge>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>

      {/* Tabela de Gastos Recentes */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-6">Gastos Recentes</h3>
          <div className="space-y-4">
            {[
              { date: "24 Mai 2024", description: "Passagem aérea Brasília → São Paulo", value: "R$ 1.284,00", supplier: "LATAM" },
              { date: "20 Mai 2024", description: "Material de escritório e impressão", value: "R$ 892,50", supplier: "Papelaria Central" },
              { date: "15 Mai 2024", description: "Consultoria em comunicação digital", value: "R$ 3.200,00", supplier: "Agência Digital SP" },
            ].map((expense, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b last:border-0">
                <div>
                  <p className="font-medium">{expense.description}</p>
                  <p className="text-xs text-gray-500">{expense.supplier} • {expense.date}</p>
                </div>
                <p className="font-semibold text-gray-900">{expense.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
