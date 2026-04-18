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
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <>
      <Preloader />
      <ScrollProgress />
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
          <Testimonials />
          <FAQ />
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