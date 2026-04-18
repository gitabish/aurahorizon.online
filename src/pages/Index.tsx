"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  return (
    <>
      <Preloader />
      <main id="top" className="relative min-h-screen overflow-x-hidden">
        <div className="noise-overlay" />
        <CustomCursor />
        <SmoothScroll>
          <Navigation />
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Industries />
          <Projects />
          <Process />
          <Pricing />
          <Feedback />
          <Contact />
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;