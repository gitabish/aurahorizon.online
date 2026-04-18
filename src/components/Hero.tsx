"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import HeroScene from "./HeroScene";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <motion.div style={{ y: springY, opacity, scale }} className="absolute inset-0 z-0">
        <HeroScene className="h-full w-full" />
      </motion.div>
      
      <div className="absolute inset-0 z-0 grid-bg-premium opacity-40" />
      
      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-sm font-medium text-primary mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Crafting Digital Horizons</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            <span className="text-gradient-silver">We craft digital experiences that</span>
            <br />
            <span className="text-gradient">turn visitors into loyal customers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Premium, high-converting websites for dentists, doctors, cafes, restaurants, garages, retail shops and service businesses worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton href="#contact" className="h-14 px-10 text-base">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </MagneticButton>
            <MagneticButton href="#projects" variant="ghost" className="h-14 px-10 text-base">
              View Our Work
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;