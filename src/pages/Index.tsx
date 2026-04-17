import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Industries />
      <Process />
      <Pricing />
      <Feedback />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
