import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

interface ProposicoesFiltersProps {
  selectedCasa: 'Câmara' | 'Senado' | 'Todas';
  onCasaChange: (value: 'Câmara' | 'Senado' | 'Todas') => void;
}

export function ProposicoesFilters({ selectedCasa, onCasaChange }: ProposicoesFiltersProps) {
  return (
    <div className="bg-[#EFF4FF] p-6 rounded-2xl border border-gray-100 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg text-emerald-700">FILTROS AVANÇADOS</h3>
        <Button variant="outline" size="sm" className="text-xs cursor-pointer">
          LIMPAR
        </Button>
      </div>

      {/* Casa Legislativa */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500 mb-3">CASA LEGISLATIVA</p>
        <RadioGroup 
          value={selectedCasa} 
          onValueChange={(value) => onCasaChange(value as 'Câmara' | 'Senado' | 'Todas')}
        >
          <div className="flex items-center gap-3 mb-3">
            <RadioGroupItem value="Todas" id="todas" />
            <Label htmlFor="todas" className="text-sm cursor-pointer">Todas as Casas</Label>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <RadioGroupItem value="Câmara" id="camara" />
            <Label htmlFor="camara" className="text-sm cursor-pointer">Câmara dos Deputados</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="Senado" id="senado" />
            <Label htmlFor="senado" className="text-sm cursor-pointer">Senado Federal</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Tema */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500 mb-3">TEMA</p>
        <Select defaultValue="todos">
          <SelectTrigger className='w-full'>
            <SelectValue placeholder="Todos os Temas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos os Temas</SelectItem>
            <SelectItem value="direitos-digitais">Direitos Digitais</SelectItem>
            <SelectItem value="tributario">Tributário</SelectItem>
            <SelectItem value="saneamento">Saneamento</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Status */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500 mb-3">STATUS</p>
        <Select defaultValue="todos">
          <SelectTrigger className='w-full'>
            <SelectValue placeholder="Qualquer Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Qualquer Status</SelectItem>
            <SelectItem value="em-tramitacao">Em Tramitação</SelectItem>
            <SelectItem value="aprovada">Aprovada</SelectItem>
            <SelectItem value="arquivada">Arquivada</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Ano */}
      <div>
        <p className="text-sm font-medium text-gray-500 mb-3">ANO</p>
        <div className="px-3">
          <Slider defaultValue={[2000, 2024]} min={2000} max={2024} step={1} />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>2000</span>
            <span>2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}