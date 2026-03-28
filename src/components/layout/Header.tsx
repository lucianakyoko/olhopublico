'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Políticos', href: '/politicos' },
  { label: 'Proposições', href: '/proposicoes' },
  { label: 'Comparador', href: '/comparador' },
  { label: 'Alertas', href: '/alertas' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return(
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
                src="/logo.svg"
                alt="Logo Olho Público"
                width={40}
                height={40}
                className="w-6 h-6 md:w-10 md:h-10"
              />
            <div className="font-bold text-lg md:text-2xl lg:text-3xl tracking-tighter text-gray-900">
              Olho Público
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-emerald-700 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        
          <div className="hidden md:flex items-center gap-4">
            <Button variant="default" asChild>
              <Link href="/auth/login">Entrar</Link>
            </Button>
          </div>

          {/* Menu mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden cursor-pointer">
              <Button >
                <Menu className="h-10 w-10"/>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 px-4">
              <SheetTitle className="sr-only">
                Menu de navegação
              </SheetTitle>
              <div className="flex flex-col gap-8 pt-10 pb-4 h-full">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/logo.svg"
                    alt="Logo Olho Público"
                    width={32}
                    height={32}
                  />
                  <span className="font-bold text-2xl">Olho Público</span>
                </Link>

                <nav className="flex flex-col gap-6 text-lg">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-emerald-700 font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-auto" onClick={() => setOpen(false)}>
                  <Link href="/auth/login">Entrar na minha conta</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
