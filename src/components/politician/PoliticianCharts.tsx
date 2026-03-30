import { Card, CardContent } from '@/components/ui/card';

export default function PoliticianCharts() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Gráficos de Desempenho</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-4">Propostas por Mês (2024)</h3>
            <div className="h-80 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed">
              <p className="text-gray-400">Line Chart - Proposals over time (Recharts)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-4">Distribuição de Votos por Tema</h3>
            <div className="h-80 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed">
              <p className="text-gray-400">Pie/Donut Chart - Votes by theme (Recharts)</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-medium mb-4">Tendência de Comparecimento</h3>
          <div className="h-80 bg-gray-50 rounded-xl flex items-center justify-center border border-dashed">
            <p className="text-gray-400">Attendance evolution chart</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
