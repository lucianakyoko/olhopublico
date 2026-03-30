import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Share2, Bell } from 'lucide-react';

interface Politician {
  id: string;
  name: string;
  party: string;
  state: string;
  photoUrl: string;
  house: 'Câmara' | 'Senado';
}

interface PoliticianHeaderProps {
  politician: Politician;
}

export default function PoliticianHeader({ politician }: PoliticianHeaderProps) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={politician.photoUrl}
                alt={politician.name}
                className="object-cover"
                // priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-6">
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge variant="secondary">DEPUTADA FEDERAL</Badge>
              <Badge variant="outline">EM EXERCÍCIO</Badge>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
              {politician.name}
            </h1>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-lg text-gray-600 mb-10">
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                <span>{politician.party}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                <span>{politician.state}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 px-8 cursor-pointer">
                <Bell className="mr-3 h-5 w-5" />
                Seguir político
              </Button>

              <Button size="lg" variant="outline" className="px-8 cursor-pointer">
                <Share2 className="mr-3 h-5 w-5" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
