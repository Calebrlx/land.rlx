// import Testimonial from "@/components/landing-testimonial";
// import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { NewsletterSignup } from "@/components/newsletter-signup";
import Footer from '@/components/footer'
// import Features from '@/components/features'
import Zigzag from '@/components/zigzag'

import { HeroSection } from "@/components/hero2"
import { FeaturesSection } from "@/components/features2"
import CTA from "@/components/cta"

function LandingPage() {
  return (
    <main>  {/* className="h-full bg-[#111827] overflow-auto"> */}
      <div className="mx-auto max-w-screen-xl h-full px-5">
        {/* <div> */}
          <Navbar />
          <HeroSection /> 
          {/* <Hero /> */}
          {/* <Features /> */}
          {/* <Testimonial /> */}
          <Zigzag />
          <CTA />
          <FeaturesSection />
          
          <NewsletterSignup />
          <Footer />
        {/* </div> */}
      </div>
    </main>
  );
}

export default LandingPage;
