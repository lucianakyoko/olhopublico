import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-emerald-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Participe da democracia ativa
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            A transparência é o primeiro passo para um país melhor. 
            Comece acompanhando quem te representa no Congresso Nacional.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto h-14 px-10 text-base font-medium bg-emerald-700 hover:bg-emerald-800"
            >
              <Link href="/politicos?filter=estado">
                Escolha seu estado
              </Link>
            </Button>

            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto h-14 px-10 text-base font-medium border-2 border-gray-900 hover:bg-white"
            >
              <Link href="/politicos">
                Busque um político
              </Link>
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-8">
            Mais de 10.000 cidadãos já estão acompanhando seus representantes
          </p>
        </div>
      </div>
    </section>
  );
}
