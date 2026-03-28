import { Badge } from '@/components/ui/badge';
import { Button } from '../components/ui/button';
import { House, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[500] mx-auto px-6 py-10 flex flex-col gap-6">
        <h1 className='flex flex-col gap-4'>
          <Badge 
            variant="secondary" 
            className="text-emerald-100 bg-primary px-4 py-1.5 text-sm font-medium mx-auto md:mx-0"
          >
            ERRO 404
          </Badge>
          <span className='text-center md:text-left text-[#0B1C30] font-black text-6xl md:text-7xl lg:text-8xl'>Opa!</span>
          <p className='text-center md:text-left text-primary font-bold text-4xl'>Página não encontrada</p>
        </h1>

        <p className='text-center md:text-left text-lg md:text-[20px] text-[#3F4943] max-w-[496]'>
          Parece que a proposição ou o político que você está
          procurando mudou de base ou o link está quebrado.
          Que tal voltarmos para a fiscalização principal?
        </p>

        <div className='flex flex-col md:flex-row gap-4'>
          <Button variant='default' asChild>
            <Link href='/'>
              <House />
              Voltar para Início
            </Link>
          </Button>
          <Button 
            asChild 
            variant='secondary' 
            className='bg-[#D3E4FE] hover:bg-[#c0d4f3] text-[#0B1C30] font-bold'
          >
            <Link href='/politicos'>
              <Search />
              Pesquisar Políticos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}