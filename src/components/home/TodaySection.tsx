import TodayCard from './TodayCard';

const todayItems = [
  {
    house: 'Câmara' as const,
    type: 'PL',
    number: '1234/2024',
    title: 'Reforma do Ensino Médio: Novas Diretrizes',
    description: 'Proposta altera a carga horária mínima e define novos itinerários formativos para as redes públicas e privadas.',
    status: 'Votação Urgente' as const,
    timeAgo: 'Há 2 horas',
  },
  {
    house: 'Senado' as const,
    type: 'PEC',
    number: '45/2019',
    title: 'Regulamentação da Reforma Tributária',
    description: 'Definição das alíquotas do IVA e da cesta básica nacional. Impacto direto no consumo das famílias.',
    status: 'Aprovado' as const,
    timeAgo: 'Há 8 horas',
  },
  {
    house: 'Comissão' as const,
    type: 'REQ',
    number: '88/2024',
    title: 'Convocação de Ministro para Esclarecimentos',
    description: 'Pedido de explicações sobre a execução orçamentária de programas de habitação popular.',
    status: 'Em Debate' as const,
    isLive: true,
  },
];

export default function TodaySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <p className="text-emerald-600 font-medium text-sm tracking-widest mb-2">
              MONITORAMENTO EM TEMPO REAL
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              O que rolou hoje no Congresso
            </h2>
          </div>

          <a 
            href="/proposicoes" 
            className="text-emerald-700 hover:text-emerald-800 font-medium flex items-center gap-2 mt-4 md:mt-0 group"
          >
            Ver todas as proposições 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Grid dos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {todayItems.map((item, index) => (
            <TodayCard
              key={index}
              house={item.house}
              type={item.type}
              number={item.number}
              title={item.title}
              description={item.description}
              status={item.status}
              timeAgo={item.timeAgo}
              isLive={item.isLive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
