'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HistoryItem {
  id: string;
  type: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  isRead: boolean;
}

const historyItems: HistoryItem[] = [
  {
    id: '1',
    type: 'TRAMITAÇÃO LEGISLATIVA',
    title: 'PL 2630/2020 foi incluído na pauta de votação',
    description: 'A proposta que institui a Lei Brasileira de Liberdade, Responsabilidade e Transparência na Internet será votada na próxima terça-feira.',
    time: 'Hoje, 14:32',
    icon: '📋',
    isRead: false,
  },
  {
    id: '2',
    type: 'GASTO DETECTADO',
    title: 'Nova nota fiscal emitida: Dep. Arthur Lira',
    description: 'Registro de gasto com Consultoria Técnica no valor de R$ 45.000,00 identificado no portal da transparência.',
    time: 'Ontem, 09:15',
    icon: '💰',
    isRead: false,
  },
  {
    id: '3',
    type: 'PRONUNCIAMENTO',
    title: 'Senador Rodrigo Pacheco mencionou "Educação"',
    description: 'Durante sessão plenária, o Senador defendeu a urgência na votação do novo marco do ensino técnico.',
    time: '22 Mai, 16:40',
    icon: '🗣️',
    isRead: true,
  },
  {
    id: '4',
    type: 'VOTAÇÃO CONCLUÍDA',
    title: 'PL 892/2024 foi aprovado na CCJ',
    description: 'O projeto que institui o Programa Nacional de Alfabetização Digital foi aprovado na Comissão de Constituição e Justiça.',
    time: '21 Mai, 11:20',
    icon: '✅',
    isRead: true,
  },
];

export default function RecentHistory() {
  const [activeTab, setActiveTab] = useState<'all' | 'read'>('all');

  const filteredItems = activeTab === 'all' 
    ? historyItems 
    : historyItems.filter(item => item.isRead);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Histórico Recente</h2>
        
        {/* Abas Todos / Lidas */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 pb-3 text-sm font-medium transition-colors border-b-2 -mb-px
              ${activeTab === 'all' 
                ? 'border-emerald-700 text-emerald-700' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            TODOS
          </button>
          <button
            onClick={() => setActiveTab('read')}
            className={`px-6 pb-3 text-sm font-medium transition-colors border-b-2 -mb-px
              ${activeTab === 'read' 
                ? 'border-emerald-700 text-emerald-700' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
          >
            LIDAS
          </button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0 divide-y">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="p-6 hover:bg-gray-50 transition-colors cursor-pointer flex gap-5"
              >
                <div className="text-2xl mt-1 flex-shrink-0">{item.icon}</div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="text-xs uppercase tracking-widest">
                      {item.type}
                    </Badge>
                    <span className="text-xs text-gray-500 ml-auto">{item.time}</span>
                  </div>

                  <h4 className="font-semibold text-base mb-1.5">{item.title}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </div>

                <div className="text-emerald-600 self-center">→</div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-gray-500">
              Nenhuma notificação lida ainda.
            </div>
          )}
        </CardContent>
      </Card>

      {activeTab === 'all' && (
        <div className="text-center mt-6">
          <button className="text-emerald-700 hover:text-emerald-800 text-sm font-medium">
            Carregar notificações mais antigas
          </button>
        </div>
      )}
    </div>
  );
}
