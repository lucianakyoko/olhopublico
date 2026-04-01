'use client';

import { useState } from 'react';
import AlertsHeader from '@/components/alerts/AlertsHeader';
import CreateAlertForm from '@/components/alerts/CreateAlertForm';
import ActiveAlerts from '@/components/alerts/ActiveAlerts';
import RecentHistory from '@/components/alerts/RecentHistory';

export default function AlertsPage() {
  const [activeAlertsCount] = useState(12);
  const [notificationsCount] = useState(84);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <AlertsHeader 
          activeAlerts={activeAlertsCount} 
          notifications={notificationsCount} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          
          {/* Sidebar - Criar Novo Alerta */}
          <div className="lg:col-span-4">
            <CreateAlertForm />
          </div>

          {/* Conteúdo Principal */}
          <div className="lg:col-span-8 space-y-10">
            <ActiveAlerts />
            <RecentHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
