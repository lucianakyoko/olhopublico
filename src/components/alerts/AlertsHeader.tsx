interface AlertsHeaderProps {
  activeAlerts: number;
  notifications: number;
}

export default function AlertsHeader({ activeAlerts, notifications }: AlertsHeaderProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">Central de Alertas</h1>
      <p className="text-gray-600 mt-3 max-w-2xl">
        Gerencie suas notificações personalizadas sobre movimentações legislativas e gastos públicos. 
        Fique por dentro de cada passo do poder público.
      </p>

      {/* Estatísticas rápidas */}
      <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-6 grid grid-cols-2 gap-8 max-w-md">
        <div>
          <p className="text-4xl font-bold text-emerald-700">{activeAlerts}</p>
          <p className="text-sm text-gray-600 mt-1">ALERTAS ATIVOS</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-emerald-700">{notifications}</p>
          <p className="text-sm text-gray-600 mt-1">NOTIFICAÇÕES</p>
        </div>
      </div>
    </div>
  );
}
