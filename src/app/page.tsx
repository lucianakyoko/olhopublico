import FeaturedDeputies from "../components/home/FeaturedDeputies";
import Hero from "../components/home/Hero";
import LegislatureSummary from "../components/home/LegislatureSummary";
import TodaySection from "../components/home/TodaySection";

export default function Home() {
  return (
    <main >
      <Hero />
      <TodaySection />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Deputados em Destaque */}
            <FeaturedDeputies />

            {/* Resumo da Legislatura  */}
            <div className="lg:col-span-4">
              <LegislatureSummary />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
