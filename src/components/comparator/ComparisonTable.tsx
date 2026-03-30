import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Politician {
  id: string;
  name: string;
  party: string;
  state: string;
}

interface ComparisonTableProps {
  politicians: Politician[];
}

export default function ComparisonTable({ politicians }: ComparisonTableProps) {
  const columns = politicians.length > 0 ? politicians : [{ id: 'empty', name: '', party: '', state: '' }];

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-5 px-8 font-medium text-gray-500">CATEGORIA</th>
                {politicians.map((p, index) => (
                  <th key={p.id} className="text-left py-5 px-8 font-medium">
                    <div className="font-semibold text-gray-900">{p.name.split(' ')[0]}</div>
                    <div className="text-xs text-gray-500">{p.party} • {p.state}</div>
                  </th>
                ))}
                {politicians.length < 3 && (
                  <th className="text-left py-5 px-8 font-medium text-gray-400">---</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                { label: "Propostas Apresentadas", values: ["142 projetos", "87 projetos", "—"] },
                { label: "Relatorias de Destaque", values: ["6 comissões", "2 comissões", "—"] },
                { label: "Fidelidade Partidária", values: ["98% •", "72% •", "—"] },
                { label: "Viagens Oficiais", values: ["4 internacionais", "12 internacionais", "—"] },
                { label: "Votações Polêmicas (Sim)", values: ["Reforma Tributária", "Proteção Ambiental", "—"] },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-5 px-8 font-medium text-gray-700">{row.label}</td>
                  {row.values.slice(0, politicians.length).map((value, i) => (
                    <td key={i} className="py-5 px-8 text-sm">
                      {value}
                    </td>
                  ))}
                  {politicians.length < 3 && (
                    <td className="py-5 px-8 text-sm text-gray-400">—</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
