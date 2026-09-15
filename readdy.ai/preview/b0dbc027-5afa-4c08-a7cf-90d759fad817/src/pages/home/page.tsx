import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Leadership from "./components/Leadership";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Services />
      <HowItWorks />
      <Leadership />
      <Testimonial />
      <FAQ />
      <Contact />
    </>
  );
}