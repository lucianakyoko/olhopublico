import { Card, CardContent } from '@/components/ui/card';

export default function PoliticianVotes() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Votos Recentes</h2>
      
      <div className="space-y-4">
        {[
          { bill: "PEC 45/2019 - Reforma Tributária", vote: "Sim", result: "Aprovada", date: "18 Mai 2024" },
          { bill: "PL 2630 - Fake News", vote: "Não", result: "Rejeitada", date: "18 Mai 2024" },
          { bill: "PL 4015/2023 - Reoneração", vote: "Sim", result: "Aprovada", date: "10 Mai 2024" },
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="font-medium">{item.bill}</p>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              </div>
              <div className="text-right">
                <div className={`text-lg font-bold ${item.vote === 'Sim' ? 'text-emerald-600' : 'text-red-600'}`}>
                  {item.vote}
                </div>
                <p className="text-xs text-gray-500">{item.result}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
