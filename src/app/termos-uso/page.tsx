export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Termos de Uso</h1>
          <p className="text-gray-500">Última atualização: 31 de Março de 2026</p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <p className="text-lg">
            Ao utilizar o Olho Público, você concorda com os seguintes Termos de Uso. 
            Por favor, leia com atenção antes de continuar navegando.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p>
              O acesso e uso desta plataforma estão condicionados à aceitação e cumprimento destes Termos de Uso. 
              Caso você não concorde com qualquer parte destes termos, não deve utilizar nossos serviços.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso da Plataforma</h2>
            <p>O Olho Público é uma ferramenta independente de transparência pública. Você pode utilizar a plataforma para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-600">
              <li>Consultar dados públicos de parlamentares</li>
              <li>Configurar alertas personalizados sobre atividades legislativas</li>
              <li>Comparar a atuação de diferentes políticos</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsabilidades do Usuário</h2>
            <p>Você concorda em não:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-600">
              <li>Utilizar a plataforma para fins ilegais ou maliciosos</li>
              <li>Tentar sobrecarregar ou interferir em nossos sistemas</li>
              <li>Reproduzir conteúdo sem autorização para fins comerciais</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitação de Responsabilidade</h2>
            <p>
              Os dados apresentados são extraídos de fontes oficiais públicas. Embora nos esforcemos para manter a precisão 
              e atualização das informações, não nos responsabilizamos por eventuais inconsistências nas bases governamentais.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
            Ao continuar utilizando o Olho Público, você confirma que leu, compreendeu e concorda com estes Termos de Uso.
          </div>
        </div>
      </div>
    </div>
  );
}
