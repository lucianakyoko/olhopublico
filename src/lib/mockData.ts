export interface Politico {
  id: string;
  name: string;
  party: string;
  state: string;
  photoUrl: string;
  presence: number;
  projects: number;
  house: 'Câmara' | 'Senado';
  birthDate?: string;
  email?: string;
}

// ==================== MOCK DE DEPUTADOS ====================

export const mockDeputados: Politico[] = [
  {
    id: "d1",
    name: "Ricardo Oliveira da Silva",
    party: "PL",
    state: "SP",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    presence: 94,
    projects: 12,
    house: "Câmara",
  },
  {
    id: "d2",
    name: "Ana Beatriz Fernandes",
    party: "PT",
    state: "MG",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    presence: 88,
    projects: 24,
    house: "Câmara",
  },
  {
    id: "d3",
    name: "Carlos Eduardo Mello",
    party: "UNIÃO",
    state: "RJ",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    presence: 91,
    projects: 8,
    house: "Câmara",
  },
  {
    id: "d4",
    name: "Helena Marques",
    party: "PSOL",
    state: "RS",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    presence: 98,
    projects: 42,
    house: "Câmara",
  },
  {
    id: "d5",
    name: "Roberto Azevedo",
    party: "MDB",
    state: "BA",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    presence: 82,
    projects: 15,
    house: "Câmara",
  },
  {
    id: "d6",
    name: "Julio César Rocha",
    party: "REDE",
    state: "PE",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    presence: 96,
    projects: 31,
    house: "Câmara",
  },
];

// ==================== MOCK DE SENADORES ====================

export const mockSenadores: Politico[] = [
  {
    id: "s1",
    name: "Fernando Henrique Cardoso",
    party: "PSDB",
    state: "SP",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    presence: 95,
    projects: 18,
    house: "Senado",
  },
  {
    id: "s2",
    name: "Simone Tebet",
    party: "MDB",
    state: "MS",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    presence: 89,
    projects: 27,
    house: "Senado",
  },
  {
    id: "s3",
    name: "Humberto Costa",
    party: "PT",
    state: "PE",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    presence: 92,
    projects: 35,
    house: "Senado",
  },
  {
    id: "s4",
    name: "Oriovisto Guimarães",
    party: "UNIÃO",
    state: "PR",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    presence: 87,
    projects: 14,
    house: "Senado",
  },
  {
    id: "s5",
    name: "Damares Alves",
    party: "REPUBLICANOS",
    state: "DF",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    presence: 91,
    projects: 22,
    house: "Senado",
  },
];

// Funções auxiliares para facilitar o uso
export const getAllPoliticos = () => [...mockDeputados, ...mockSenadores];

export const getPoliticosByHouse = (house: 'Câmara' | 'Senado') => {
  return house === 'Câmara' ? mockDeputados : mockSenadores;
};


// ==================== MOCK DE PROPOSIÇÕES ====================
export interface Proposicao {
  id: string;
  tipo: string;
  numero: string;
  ano: number;
  titulo: string;
  descricao: string;
  tema: string;
  casa: 'Câmara' | 'Senado';
  status: 'Em Tramitação' | 'Aprovada' | 'Arquivada';
  data: string;
  autor: string;
  autorCargo: string;
  autorFoto?: string;
}

export const mockProposicoes: Proposicao[] = [
  {
    id: "p1",
    tipo: "PL",
    numero: "2630",
    ano: 2020,
    titulo: "Lei Brasileira de Liberdade, Responsabilidade e Transparência na Internet",
    descricao: "Estabelece normas, diretrizes e mecanismos de transparência para provedores de redes sociais e de serviços de mensageria privada.",
    tema: "Direitos Digitais",
    casa: "Câmara",
    status: "Em Tramitação",
    data: "24 Mai 2024",
    autor: "Sen. Alessandro Vieira",
    autorCargo: "Senador",
  },
  {
    id: "p2",
    tipo: "PEC",
    numero: "45",
    ano: 2019,
    titulo: "Reforma do Sistema Tributário Nacional",
    descricao: "Altera o Sistema Tributário Nacional para simplificar a cobrança de impostos sobre o consumo, unificando diversos tributos em um Imposto sobre Bens e Serviços (IBS).",
    tema: "Tributário",
    casa: "Senado",
    status: "Aprovada",
    data: "15 Mai 2024",
    autor: "Dep. Baleia Rossi",
    autorCargo: "Deputado Federal",
  },
  {
    id: "p3",
    tipo: "PL",
    numero: "4162",
    ano: 2019,
    titulo: "Novo Marco Legal do Saneamento Básico",
    descricao: "Aprimora as condições estruturais do saneamento básico no Brasil, facilitando a entrada de investimentos privados e definindo metas de universalização até 2033.",
    tema: "Saneamento",
    casa: "Câmara",
    status: "Arquivada",
    data: "10 Mai 2024",
    autor: "Sen. Tasso Jereissati",
    autorCargo: "Senador",
  },
];

export const getProposicoesByCasa = (casa: 'Câmara' | 'Senado') => {
  return mockProposicoes.filter(p => p.casa === casa);
};
