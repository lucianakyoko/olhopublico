import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function PoliticianProposals() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Propostas Apresentadas</h2>
        <Button variant="outline">Ver todas as propostas →</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between mb-3">
                <Badge>PL 1240/2024</Badge>
                <span className="text-xs text-gray-500">15 Mai 2024</span>
              </div>
              <h3 className="font-medium mb-2 line-clamp-2">
                Dispõe sobre a obrigatoriedade de painéis solares em prédios públicos
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                Redução de custos energéticos em órgãos federais...
              </p>
              <div className="mt-4 text-xs text-emerald-600 font-medium">
                AGUARDANDO RELATOR
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
