import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import CeoJourney from "@/components/sections/CeoJourney";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background-50 font-sans text-foreground-950">
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        <span className="inline-flex items-center gap-2 rounded-md bg-accent-500 px-4 py-3 text-sm font-semibold text-primary-950 shadow-lg">
          Skip to content
        </span>
      </a>

      <Header />

      <main id="main-content" className="pb-24 lg:pb-0">
        <Hero />
        <TrustStats />
        <Services />
        <HowItWorks />
        <About />
        <CeoJourney />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
