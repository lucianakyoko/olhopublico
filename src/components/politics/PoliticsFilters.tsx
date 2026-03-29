import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PoliticsFiltersProps {
  selectedHouse: 'camara' | 'senado';
  onHouseChange: (value: 'camara' | 'senado') => void;
}

export function PoliticsFilters({ selectedHouse, onHouseChange }: PoliticsFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Filtros</h3>
        <Button variant="ghost" size="sm" className="text-xs">
          LIMPAR
        </Button>
      </div>

      {/* Casa Legislativa */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500 mb-3">CASA LEGISLATIVA</p>
        <RadioGroup 
          value={selectedHouse} 
          onValueChange={(value) => onHouseChange(value as 'camara' | 'senado')}
          className="space-y-3"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="camara" id="camara" />
            <Label htmlFor="camara" className="text-sm cursor-pointer">
              Câmara dos Deputados
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="senado" id="senado" />
            <Label htmlFor="senado" className="text-sm cursor-pointer">
              Senado Federal
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Estado */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500 mb-3">ESTADO (UF)</p>
        <Select defaultValue="todos">
          <SelectTrigger>
            <SelectValue placeholder="Todos os Estados" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos os Estados</SelectItem>
            <SelectItem value="sp">São Paulo</SelectItem>
            <SelectItem value="rj">Rio de Janeiro</SelectItem>
            <SelectItem value="mg">Minas Gerais</SelectItem>
            <SelectItem value="rs">Rio Grande do Sul</SelectItem>
            <SelectItem value="ba">Bahia</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Partido */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500 mb-3">PARTIDO</p>
        <div className="space-y-3">
          {['PT', 'PL', 'UNIÃO', 'PP', 'PSOL', 'MDB', 'REDE'].map((partido) => (
            <div key={partido} className="flex items-center gap-2">
              <input type="checkbox" id={partido} className="w-4 h-4" />
              <label htmlFor={partido} className="text-sm cursor-pointer">{partido}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Presença Mínima */}
      <div>
        <p className="text-sm font-medium text-gray-500 mb-3">PRESENÇA MÍNIMA</p>
        <div className="px-2">
          <Slider defaultValue={[30]} max={100} step={5} />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
