import { Hero } from "@/components/nexus/Hero";
import { Problem } from "@/components/nexus/Problem";
import { Architecture } from "@/components/nexus/Architecture";
import { Convergence } from "@/components/nexus/Convergence";
import { Harnesses } from "@/components/nexus/Harnesses";
import { Research } from "@/components/nexus/Research";
import { CaseStudyTeaser } from "@/components/nexus/CaseStudyTeaser";
import { Repos } from "@/components/nexus/Repos";
import { TrustDemo } from "@/components/nexus/TrustDemo";
import { Footer } from "@/components/nexus/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Hero />
      <Problem />
      <Architecture />
      <Convergence />
      <Harnesses />
      <Research />
      <CaseStudyTeaser />
      <Repos />
      <TrustDemo />
      <Footer />
    </main>
  );
};

export default Index;
