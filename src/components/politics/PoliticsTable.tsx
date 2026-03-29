import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Politico {
  id: string;
  name: string;
  party: string;
  state: string;
  photoUrl: string;
  presence: number;
  projects: number;
  house: 'Câmara' | 'Senado';
}

interface PoliticsTableProps {
  politicos: Politico[];
  title?: string;
  count?: number;
}

export function PoliticsTable({ 
  politicos,
}: PoliticsTableProps) {
  return (
    <div>
      {/* Tabela */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Partido</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-center">Presença</TableHead>
              <TableHead className="text-center">Proposições</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {politicos.map((politico) => (
              <TableRow key={politico.id} className="hover:bg-gray-50">
                <TableCell>
                  <div className="relative w-10 h-10">
                    <img
                      src={politico.photoUrl}
                      alt={politico.name}
                      className="rounded-full object-cover ring-1 ring-gray-200"
                    />
                  </div>
                </TableCell>

                <TableCell className="font-medium">{politico.name}</TableCell>

                <TableCell>
                  <Badge variant="secondary">{politico.party}</Badge>
                </TableCell>

                <TableCell>
                  <span className="font-medium text-gray-700">{politico.state}</span>
                </TableCell>

                <TableCell className="text-center">
                  <div className="inline-flex items-center gap-2">
                    <span className="font-bold text-emerald-600">{politico.presence}%</span>
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-600 rounded-full" 
                        style={{ width: `${politico.presence}%` }}
                      />
                    </div>
                  </div>
                </TableCell>

                <TableCell className="text-center font-medium">
                  {politico.projects}
                </TableCell>

                <TableCell className="text-right">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/politico/${politico.id}`}>
                      Ver Perfil
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
