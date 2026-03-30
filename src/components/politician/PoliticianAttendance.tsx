import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function PoliticianAttendance() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Visão Geral da Frequência</h2>
        <p className="text-gray-600">Registro de frequência dos últimos 6 meses</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-5xl font-bold text-emerald-600">94%</p>
            <p className="text-sm text-gray-500 mt-2">Presença Geral</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-5xl font-bold text-amber-600">8</p>
            <p className="text-sm text-gray-500 mt-2">Sessões perdidas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-5xl font-bold text-gray-700">42</p>
            <p className="text-sm text-gray-500 mt-2">Sessões Assistidas</p>
          </CardContent>
        </Card>
      </div>

      {/* Simple Calendar-like view */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Sessões Recentes
          </h3>
          <div className="space-y-4">
            {[
              { date: "May 24, 2024", status: "Present", session: "Plenary Session" },
              { date: "May 22, 2024", status: "Present", session: "Constitution Committee" },
              { date: "May 20, 2024", status: "Absent", session: "Economic Affairs" },
              { date: "May 18, 2024", status: "Present", session: "Plenary Session" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{item.date}</p>
                  <p className="text-sm text-gray-500">{item.session}</p>
                </div>
                <div className={`px-4 py-1 rounded-full text-sm font-medium ${
                  item.status === 'Present' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                }`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
