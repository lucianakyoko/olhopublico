import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2 } from 'lucide-react';

interface Alert {
  id: string;
  title: string;
  description: string;
  type: string;
  status: 'Ativo';
  lastUpdate: string;
  icon: string;
}

const activeAlerts: Alert[] = [
  {
    id: '1',
    title: 'Dep. Tabata Amaral',
    description: 'Monitorando: Votações e Gastos',
    type: 'Politician',
    status: 'Ativo',
    lastUpdate: 'Atualizado há 2h',
    icon: '👤',
  },
  {
    id: '2',
    title: 'Fundo Partidário',
    description: 'Monitorando: Movimentações > R$1M',
    type: 'Budget',
    status: 'Ativo',
    lastUpdate: 'Atualizado hoje',
    icon: '🏛️',
  },
  {
    id: '3',
    title: 'PEC da Educação',
    description: 'Monitorando: Tramitação no Senado',
    type: 'Proposal',
    status: 'Ativo',
    lastUpdate: 'Sem novidades',
    icon: '🎓',
  },
];

export default function ActiveAlerts() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Alertas em Monitoramento</h2>
        <a href="#" className="text-emerald-700 hover:text-emerald-800 text-sm font-medium">
          Ver todos
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeAlerts.map((alert) => (
          <Card key={alert.id} className="group hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                    {alert.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{alert.title}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{alert.description}</p>
                  </div>
                </div>

                <button className="text-gray-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  ATIVO
                </Badge>
                <span className="text-xs text-gray-500">{alert.lastUpdate}</span>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Card para adicionar novo alerta */}
        <Card className="border-dashed border-2 hover:border-emerald-300 transition-colors cursor-pointer group">
          <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
              <span className="text-3xl">+</span>
            </div>
            <p className="font-medium text-gray-700">Adicionar outro monitor</p>
            <p className="text-xs text-gray-500 mt-1">Crie mais um alerta personalizado</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
