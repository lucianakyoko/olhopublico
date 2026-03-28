import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function PoliticsFilters() {
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
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="camara" defaultChecked />
            <label htmlFor="camara" className="text-sm">Câmara dos Deputados</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="senado" />
            <label htmlFor="senado" className="text-sm">Senado Federal</label>
          </div>
        </div>
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
            {/* ... mais estados */}
          </SelectContent>
        </Select>
      </div>

      {/* Partido */}
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500 mb-3">PARTIDO</p>
        <div className="space-y-3">
          {['PT', 'PL', 'UNIÃO', 'PP', 'PSOL', 'MDB'].map((partido) => (
            <div key={partido} className="flex items-center gap-2">
              <Checkbox id={partido} />
              <label htmlFor={partido} className="text-sm">{partido}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Presença Mínima */}
      <div>
        <p className="text-sm font-medium text-gray-500 mb-3">PRESENÇA MÍNIMA</p>
        <div className="px-2">
          <Slider defaultValue={[0]} max={100} step={5} />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
