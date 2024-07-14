import Zigzag from '@/components/zigzag'
import { HeroSection } from "@/components/hero2"
import { FeaturesSection } from "@/components/features2"
import CTA from "@/components/cta"
import GPTPromo from "@/components/gptpromo";

function LandingPage() {
  return (
    <main className="max-w-screen-xl h-full px-5">
          <HeroSection /> 
          <Zigzag />
          <CTA />
          <FeaturesSection />
          <GPTPromo />
    </main>
  );
}

export default LandingPage;
