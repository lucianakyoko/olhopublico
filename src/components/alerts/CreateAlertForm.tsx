'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CreateAlertForm() {
  const [monitorType, setMonitorType] = useState('politico');
  const [frequency, setFrequency] = useState('imediato');

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-7">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-2xl">🛎️</div>
        <h2 className="font-semibold text-xl">Criar Novo Alerta</h2>
      </div>

      <div className="space-y-6">
        {/* O que monitorar */}
        <div>
          <Label className="text-sm font-medium text-gray-500 mb-2 block">O QUE MONITORAR?</Label>
          <Select value={monitorType} onValueChange={setMonitorType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="politico">Político Específico</SelectItem>
              <SelectItem value="tema">Tema ou Palavra-chave</SelectItem>
              <SelectItem value="gasto">Gastos Acima de Valor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Nome do político ou tema */}
        <div>
          <Label className="text-sm font-medium text-gray-500 mb-2 block">
            NOME DO POLÍTICO OU TEMA
          </Label>
          <Input 
            placeholder="Ex: Educação, Rodrigo Pacheco..." 
            className="h-12"
          />
        </div>

        {/* Frequência */}
        <div>
          <Label className="text-sm font-medium text-gray-500 mb-3 block">FREQUÊNCIA</Label>
          <div className="flex gap-3">
            <Button 
              variant={frequency === 'imediato' ? 'default' : 'outline'}
              onClick={() => setFrequency('imediato')}
              className="flex-1"
            >
              Imediato
            </Button>
            <Button 
              variant={frequency === 'diario' ? 'default' : 'outline'}
              onClick={() => setFrequency('diario')}
              className="flex-1"
            >
              Resumo Diário
            </Button>
          </div>
        </div>

        {/* Canal de envio */}
        <div>
          <Label className="text-sm font-medium text-gray-500 mb-3 block">CANAL DE ENVIO</Label>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Checkbox id="email" defaultChecked />
              <Label htmlFor="email">E-mail</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="push" />
              <Label htmlFor="push">Push</Label>
            </div>
          </div>
        </div>

        <Button className="w-full h-14 bg-emerald-700 hover:bg-emerald-800 text-base font-medium">
          ATIVAR MONITORAMENTO
        </Button>
      </div>
    </div>
  );
}
