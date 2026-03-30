import { Card, CardContent } from '@/components/ui/card';

interface Politician {
  id: string;
  name: string;
  party: string;
  state: string;
}

interface ComparisonChartProps {
  politicians: Politician[];
}

export default function ComparisonChart({ politicians }: ComparisonChartProps) {
  return (
    <Card>
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-semibold">Alinhamento por Temática</h3>
          <div className="flex items-center gap-6 text-sm">
            {politicians.map((p, index) => (
              <div key={p.id} className="flex items-center gap-2">
                <div 
                  className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-emerald-600' : 'bg-blue-600'}`} 
                />
                <span className="font-medium">{p.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder para Radar Chart */}
        <div className="h-96 bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-2">Radar Chart - Alinhamento por Temática</p>
            <p className="text-sm text-gray-500">Será implementado com Recharts</p>
            <p className="text-xs text-gray-400 mt-4">Temas: Economia, Segurança, Saúde, Educação, Meio Ambiente</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
