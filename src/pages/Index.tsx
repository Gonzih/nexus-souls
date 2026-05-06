import { Hero } from "@/components/nexus/Hero";
import { Problem } from "@/components/nexus/Problem";
import { Architecture } from "@/components/nexus/Architecture";
import { Harnesses } from "@/components/nexus/Harnesses";
import { Research } from "@/components/nexus/Research";
import { Repos } from "@/components/nexus/Repos";
import { TrustDemo } from "@/components/nexus/TrustDemo";
import { Footer } from "@/components/nexus/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Hero />
      <Problem />
      <Architecture />
      <Harnesses />
      <Research />
      <Repos />
      <TrustDemo />
      <Footer />
    </main>
  );
};

export default Index;
