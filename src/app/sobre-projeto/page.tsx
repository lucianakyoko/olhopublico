import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Seção Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="text-emerald-700">A INSTITUIÇÃO</Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              Transparência que<br />
              <span className="text-emerald-700">fortalece a democracia.</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg">
              O Olho Público é uma plataforma independente dedicada a traduzir dados públicos 
              em informação acessível, permitindo que cada cidadão fiscalize o poder legislativo 
              com precisão cirúrgica.
            </p>
          </div>

          {/* Imagem */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800"
              alt="Congresso Nacional"
              width={800}
              height={600}
              className="w-full object-cover"
              // priority
            />
            {/* Card sobreposto */}
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                  🔍
                </div>
                <p className="font-medium text-sm">Informação auditada diretamente das fontes oficiais do governo federal.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Como Operamos */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-3">Como operamos</h2>
          <p className="text-gray-600 max-w-2xl">
            Nossa metodologia combina tecnologia de ponta com rigor jornalístico para garantir 
            que você receba a verdade, sem filtros.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                📡
              </div>
              <h3 className="font-semibold text-xl mb-4">Fontes Oficiais</h3>
              <p className="text-gray-600">
                Consumimos dados via API diretamente do Portal da Transparência, 
                Câmara dos Deputados e Senado Federal. Não utilizamos fontes secundárias ou rumores.
              </p>
              <div className="flex gap-2 mt-6">
                <Badge variant="outline">API REST</Badge>
                <Badge variant="outline">OPEN DATA</Badge>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                ⚖️
              </div>
              <h3 className="font-semibold text-xl mb-4">Neutralidade</h3>
              <p className="text-gray-600">
                Nossos algoritmos são programados para a imparcialidade. 
                Exibimos votos, gastos e presenças sem juízo de valor ou inclinação partidária.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-emerald-700 text-white p-8 rounded-3xl">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                🔄
              </div>
              <h3 className="font-semibold text-xl mb-4">Atualização Diária</h3>
              <p className="text-emerald-100">
                As informações são sincronizadas a cada 24 horas para garantir que você 
                acompanhe o ritmo real de Brasília.
              </p>
              <div className="mt-6 text-xs bg-white/20 px-4 py-2 rounded-full inline-block">
                STATUS: ONLINE / SYNC_OK
              </div>
            </div>
          </div>
        </div>

        {/* Metodologia */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Metodologia de Análise</h2>
            <div className="space-y-10">
              {[
                "01 Extração: Coleta automatizada de JSON/XML das fontes de dados abertos.",
                "02 Tratamento: Limpeza de redundâncias e normalização de nomes e partidos.",
                "03 Visualização: Transformação de tabelas áridas em gráficos e listas intuitivas."
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="font-mono text-emerald-700 font-bold text-2xl">{step.slice(0,2)}</div>
                  <p className="text-gray-700 pt-1">{step.slice(3)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
              alt="Análise de dados"
              width={800}
              height={500}
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold text-emerald-700">99.9%</p>
              <p className="text-sm text-gray-600">Precisão dos dados</p>
            </div>
          </div>
        </div>

        {/* Compromisso Público */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Nosso Compromisso Público</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white border border-gray-100 p-10 rounded-3xl">
              <div className="text-4xl mb-6">💰</div>
              <h3 className="font-semibold text-xl mb-4">Independência Financeira</h3>
              <p className="text-gray-600">
                Não recebemos verbas governamentais ou de partidos políticos. 
                Nossa operação é mantida por doações de usuários e parcerias com instituições de fomento à transparência.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-10 rounded-3xl">
              <div className="text-4xl mb-6">📜</div>
              <h3 className="font-semibold text-xl mb-4">Acesso Histórico</h3>
              <p className="text-gray-600">
                Mantemos registros de legislaturas passadas para permitir a análise da evolução de carreira 
                e consistência de posicionamento dos parlamentares ao longo dos anos.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-24 bg-emerald-50 rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para fiscalizar?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Comece agora a acompanhar os representantes que decidem o futuro do país. 
            Informação é a ferramenta mais poderosa de um cidadão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
              Explorar Políticos
            </Button>
            <Button size="lg" variant="outline">
              Ver Proposições do Dia
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
