import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PoliticianSpeeches() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Discursos Recentes</h2>

      <div className="space-y-6">
        {[
          {
            date: "May 23, 2024",
            title: "Defense of Digital Rights and Internet Regulation",
            duration: "18 min",
            summary: "Emphasized the importance of balancing freedom of expression with protection against disinformation.",
            theme: "Digital Rights"
          },
          {
            date: "May 15, 2024",
            title: "Tax Reform and Its Impact on Small Businesses",
            duration: "12 min",
            summary: "Highlighted concerns regarding the impact of the new IBS on small and medium enterprises.",
            theme: "Economy"
          }
        ].map((speech, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between mb-3">
                <Badge variant="outline">{speech.theme}</Badge>
                <span className="text-sm text-gray-500">{speech.date} • {speech.duration}</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">{speech.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {speech.summary}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
