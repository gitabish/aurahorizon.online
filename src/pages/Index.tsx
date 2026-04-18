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
import Team from "@/components/Team";
import TechStack from "@/components/TechStack";
import ProjectPlanner from "@/components/ProjectPlanner";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";
import FloatingBackground from "@/components/FloatingBackground";

const Index = () => {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <FloatingBackground />
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
          <Reveal width="100%"><Team /></Reveal>
          <Reveal width="100%"><TechStack /></Reveal>
          <Reveal width="100%"><ProjectPlanner /></Reveal>
          <Reveal width="100%"><Pricing /></Reveal>
          <Reveal width="100%"><Testimonials /></Reveal>
          <Reveal width="100%"><Blog /></Reveal>
          <Reveal width="100%"><FAQ /></Reveal>
          <Reveal width="100%"><Feedback /></Reveal>
          <Reveal width="100%"><Newsletter /></Reveal>
          <Reveal width="100%"><CTA /></Reveal>
          <Reveal width="100%"><Contact /></Reveal>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;