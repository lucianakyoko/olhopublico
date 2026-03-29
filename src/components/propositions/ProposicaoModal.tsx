import { X, Calendar, Bell, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

interface Proposicao {
  id: string;
  tipo: string;
  numero: string;
  ano: number;
  titulo: string;
  descricao: string;
  tema: string;
  casa: 'Câmara' | 'Senado';
  status: 'Em Tramitação' | 'Aprovada' | 'Arquivada';
  data: string;
  autor: string;
  autorCargo: string;
}

interface ProposicaoModalProps {
  proposicao: Proposicao | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProposicaoModal({ proposicao, isOpen, onClose }: ProposicaoModalProps) {
  if (!proposicao) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl lg:max-w-5xl p-0 max-h-[90vh] overflow-hidden">
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header do Modal */}
          <div className="sticky top-0 bg-white border-b z-10 px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge className="bg-emerald-700 text-white">
                {proposicao.tipo} {proposicao.numero}/{proposicao.ano}
              </Badge>
              <DialogTitle className="text-xl font-semibold">
                Detalhes da Proposição
              </DialogTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
            {/* Coluna Esquerda - Ementa e Histórico */}
            <div className="lg:col-span-8 space-y-10">
              {/* Ementa Completa */}
              <div>
                <h3 className="uppercase text-xs tracking-widest text-gray-500 mb-3">EMENTA COMPLETA</h3>
                <h2 className="text-2xl font-semibold leading-tight mb-6">
                  {proposicao.titulo}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {proposicao.descricao}
                </p>
              </div>

              {/* Histórico de Tramitação */}
              <div>
                <h3 className="uppercase text-xs tracking-widest text-gray-500 mb-4">HISTÓRICO DE TRAMITAÇÃO</h3>
                <div className="space-y-8 relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-emerald-500" />
                  
                  <div>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> 24 MAI 2024
                    </p>
                    <p className="font-medium mt-1">Encaminhada para a Comissão de Constituição e Justiça (CCJ)</p>
                    <p className="text-sm text-gray-600 mt-1">Relator designado: Deputado Orlando Silva</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> 10 ABR 2024
                    </p>
                    <p className="font-medium mt-1">Apresentação de substitutivo pelo relator</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> 02 FEV 2024
                    </p>
                    <p className="font-medium mt-1">Abertura de prazo para emendas em Plenário</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Informações Técnicas */}
            <div className="lg:col-span-4">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
                <h4 className="font-semibold mb-5">INFORMAÇÕES TÉCNICAS</h4>
                
                <div className="space-y-6 text-sm">
                  <div>
                    <p className="text-gray-500">TIPO</p>
                    <p className="font-medium">Projeto de Lei (PL)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">ORIGEM</p>
                    <p className="font-medium">{proposicao.casa}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">URGÊNCIA</p>
                    <p className="font-medium">Sim (Regime de Prioridade)</p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button className="w-full bg-emerald-700 hover:bg-emerald-800 curs">
                    <Bell className="mr-2 h-4 w-4" />
                    SEGUIR PROPOSIÇÃO
                  </Button>
                  <Button variant="outline" className="w-full curs">
                    <FileText className="mr-2 h-4 w-4" />
                    TEXTO INTEGRAL
                  </Button>
                </div>

                {/* Imagem ilustrativa */}
                <div className="mt-8 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600" 
                    alt="Congresso Nacional"
                    width={600}
                    height={340}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
