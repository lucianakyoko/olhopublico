import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Politician {
  id: string;
  name: string;
}

interface ComparisonHighlightsProps {
  politicians: Politician[];
}

export default function ComparisonHighlights({ politicians }: ComparisonHighlightsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Destaque de Atuação */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-2xl">📊</div>
            <h3 className="font-semibold text-xl">Destaque de Atuação</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Ricardo Mendes possui um perfil focado em infraestrutura e economia, 
            apresentando maior consistência com as orientações do governo atual. 
            Sua assiduidade é exemplar, figurando entre os 5% mais presentes na câmara.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="secondary">ECONOMIA</Badge>
            <Badge variant="secondary">INFRAESTRUTURA</Badge>
            <Badge variant="secondary">TOP 10 PRESENÇA</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Perfil Ideológico */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-2xl">🧠</div>
            <h3 className="font-semibold text-xl">Perfil Ideológico</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Ana Clara Silva atua majoritariamente em pautas de direitos humanos e sustentabilidade. 
            Frequentemente vota contra a orientação do próprio partido em questões de impacto ambiental, 
            demonstrando autonomia política.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="secondary">MEIO AMBIENTE</Badge>
            <Badge variant="secondary">DIREITOS HUMANOS</Badge>
            <Badge variant="secondary">INDEPENDENTE</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
