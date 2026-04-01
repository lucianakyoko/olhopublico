import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo + Descrição */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.svg"
                alt="Logo Olho Público"
                width={40}
                height={40}
              />
              <span className="font-bold text-2xl text-white">Olho Público</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Transparência total sobre o que acontece no Congresso Nacional. 
              Dados oficiais da Câmara e do Senado, apresentados de forma simples e clara para o cidadão.
            </p>
          </div>

          {/* Links Úteis */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4">Plataforma</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/politicos" className="hover:text-white transition-colors">Políticos</Link>
              <Link href="/proposicoes" className="hover:text-white transition-colors">Proposições</Link>
              <Link href="/comparador" className="hover:text-white transition-colors">Comparador</Link>
              <Link href="/alertas" className="hover:text-white transition-colors">Meus Alertas</Link>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold mb-4">Institucional</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/sobre-projeto" className="hover:text-white transition-colors">Sobre o Projeto</Link>
              <Link href="/glossario" className="hover:text-white transition-colors">Glossário Legislativo</Link>
              <Link href="/termos-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
              <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-gray-800" />

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Olho Público. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0 text-center md:text-right">
            Fontes oficiais: Câmara dos Deputados e Senado Federal
          </p>
        </div>
      </div>
    </footer>
  );
}
