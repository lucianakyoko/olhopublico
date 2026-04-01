export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Política de Privacidade</h1>
          <p className="text-gray-500">Última atualização: 31 de Março de 2026</p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <p className="text-lg">
            O Olho Público valoriza sua privacidade e está totalmente comprometido em proteger seus dados pessoais. 
            Esta Política de Privacidade explica de forma clara como coletamos, usamos, compartilhamos e protegemos suas informações.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informações que coletamos</h2>
            <p className="mb-4">Coletamos apenas o essencial para oferecer uma experiência personalizada:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Nome e e-mail (quando você cria uma conta)</li>
              <li>Alertas configurados por você (políticos e temas monitorados)</li>
              <li>Preferências de notificação (e-mail ou push)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Como usamos suas informações</h2>
            <p>Utilizamos seus dados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-3">
              <li>Enviar notificações sobre os alertas que você configurou</li>
              <li>Personalizar sua experiência na plataforma</li>
              <li>Melhorar nossos serviços com base em uso anônimo</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Compartilhamento de dados</h2>
            <p>
              Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins comerciais. 
              Seus dados são usados somente para o funcionamento da plataforma.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Seus direitos</h2>
            <p>Você pode, a qualquer momento:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-3">
              <li>Acessar, corrigir ou excluir seus dados</li>
              <li>Cancelar ou modificar seus alertas</li>
              <li>Solicitar a exclusão completa da sua conta</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, 
              alteração, divulgação ou destruição.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
            Para qualquer dúvida sobre esta Política de Privacidade, entre em contato pelo e-mail: 
            <span className="text-emerald-700 font-medium">privacidade@olhopublico.org.br</span>
          </div>
        </div>
      </div>
    </div>
  );
}
