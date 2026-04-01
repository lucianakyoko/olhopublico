'use client';

import { useState, use } from 'react'; 

import { mockDeputados, mockSenadores } from '@/lib/mockData';
import PoliticianHeader from '@/components/politician/PoliticianHeader';
import PoliticianTabs from '@/components/politician/PoliticianTabs';
import PoliticianOverview from '@/components/politician/PoliticianOverview';
import PoliticianVotes from '@/components/politician/PoliticianVotes';
import PoliticianProposals from '@/components/politician/PoliticianProposals';
import PoliticianCharts from '@/components/politician/PoliticianCharts';
import PoliticianSpeeches from '@/components/politician/PoliticianSpeeches';
import PoliticianAttendance from '@/components/politician/PoliticianAttendance';
import PoliticianExpenses from '@/components/politician/PoliticianExpenses';

interface PoliticianPageProps {
  params: Promise<{ id: string }>;
}

export default function PoliticianPage({ params }: PoliticianPageProps) {
  const { id } = use(params);

  const allPoliticians = [...mockDeputados, ...mockSenadores];
  const politician = allPoliticians.find(p => p.id === id);

  const [activeTab, setActiveTab] = useState<'overview' | 'proposals' | 'votes' | 'attendance' | 'speeches' | 'charts' | 'expenses'>('overview');

  if (!politician) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Politician not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PoliticianHeader politician={politician} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <PoliticianTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-10">
          {activeTab === 'overview' && <PoliticianOverview politician={politician} />}
          {activeTab === 'proposals' && <PoliticianProposals />}
          {activeTab === 'votes' && <PoliticianVotes />}
          {activeTab === 'attendance' && <PoliticianAttendance />}
          {activeTab === 'speeches' && <div><PoliticianSpeeches /></div>}
          {activeTab === 'charts' && <PoliticianCharts politician={politician} />}
          {activeTab === 'expenses' && <PoliticianExpenses politician={politician} />}
        </div>
      </div>
    </div>
  );
}
