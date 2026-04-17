import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Marquee />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
