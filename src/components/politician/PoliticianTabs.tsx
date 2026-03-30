type TabId =
  | 'overview'
  | 'proposals'
  | 'votes'
  | 'attendance'
  | 'speeches'
  | 'charts';

const tabs: {id: TabId; label: string}[] = [
  { id: 'overview', label: 'Visão Geral' },
  { id: 'proposals', label: 'Propostas' },
  { id: 'votes', label: 'Votações' },
  { id: 'attendance', label: 'Presença' },
  { id: 'speeches', label: 'Discursos' },
  { id: 'charts', label: 'gráficos' },
];


interface PoliticianTabsProps {
  activeTab: string;
  onTabChange: (tab: 'overview' | 'proposals' | 'votes' | 'attendance' | 'speeches' | 'charts') => void;
}

export default function PoliticianTabs({ activeTab, onTabChange }: PoliticianTabsProps) {
  return (
    <div className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto gap-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`pb-2 px-2 font-medium whitespace-nowrap border-b-4  transition-colors text-lg overflow-hidden cursor-pointer
                ${activeTab === tab.id 
                  ? 'border-emerald-700 text-emerald-700' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
