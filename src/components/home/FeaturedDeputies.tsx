// src/components/home/FeaturedDeputies.tsx
import DeputyCard from './DeputyCard';

const featuredDeputies = [
  {
    name: "Ricardo Silveira",
    party: "PARTIDO XYZ",
    state: "SP",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    projects: 42,
    presence: 98,
  },
  {
    name: "Marina Duarte",
    party: "PARTIDO ABC",
    state: "MG",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    projects: 38,
    presence: 100,
  },
  {
    name: "Carlos Mendes",
    party: "PARTIDO DEF",
    state: "RS",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    projects: 29,
    presence: 95,
  },
  {
    name: "Ana Paula Vaz",
    party: "PARTIDO GHI",
    state: "RJ",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    projects: 51,
    presence: 97,
  },
];

export default function FeaturedDeputies() {
  return (
    <div className="lg:col-span-8">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Deputados em Destaque
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            Baseado em presença e proposições recentes
          </p>
        </div>

        <a 
          href="/politicos" 
          className="hidden md:block text-emerald-700 hover:text-emerald-800 font-medium text-sm flex items-center gap-1 transition-colors"
        >
          Ver todos os deputados →
        </a>
      </div>

      {/* Grid de Deputados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {featuredDeputies.map((deputy, index) => (
          <DeputyCard
            key={index}
            name={deputy.name}
            party={deputy.party}
            state={deputy.state}
            photoUrl={deputy.photoUrl}
            projects={deputy.projects}
            presence={deputy.presence}
          />
        ))}
      </div>
    </div>
  );
}
