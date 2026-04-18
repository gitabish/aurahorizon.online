"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";

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
          <Reveal width="100%"><Marquee /></Reveal>
          <Reveal width="100%"><Stats /></Reveal>
          <Reveal width="100%"><About /></Reveal>
          <Reveal width="100%"><Services /></Reveal>
          <Reveal width="100%"><Industries /></Reveal>
          <Reveal width="100%"><Projects /></Reveal>
          <Reveal width="100%"><Process /></Reveal>
          <Reveal width="100%"><Pricing /></Reveal>
          <Reveal width="100%"><Testimonials /></Reveal>
          <Reveal width="100%"><FAQ /></Reveal>
          <Reveal width="100%"><Feedback /></Reveal>
          <Reveal width="100%"><CTA /></Reveal>
          <Reveal width="100%"><Contact /></Reveal>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;