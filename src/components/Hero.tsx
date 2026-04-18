"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import HeroScene from "./HeroScene";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Sparkles, Globe } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax and fade effects for the background and content
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
  
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0"
    >
      {/* Cinematic Background Layer */}
      <motion.div 
        style={{ y: springY, opacity, scale, filter: `blur(${blur}px)` }} 
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <HeroScene className="h-full w-full mix-blend-screen opacity-60" />
      </motion.div>
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,12,0.4)_70%,rgba(10,10,12,0.8)_100%)]" />
      
      {/* Premium Grid Overlay */}
      <div className="absolute inset-0 z-0 grid-bg-premium opacity-30 pointer-events-none" />
      
      {/* Animated Aurora Beam */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/10 blur-[120px] rounded-full z-0 pointer-events-none"
      />

      {/* Content Container */}
      <div className="container relative z-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-6xl mx-auto text-center"
        >
          
          {/* Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-premium text-sm font-medium text-primary mb-10 border-primary/20 shadow-glow-soft group cursor-default"
          >
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform">
                <Sparkles className="w-3 h-3" />
              </div>
            </div>
            <span className="tracking-wide">Crafting digital experiences that drive real growth</span>
            <Globe className="w-3.5 h-3.5 opacity-50 animate-spin-slow" />
          </motion.div>

          {/* Main Headline with Floating Animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.05] mb-10"
            >
              <span className="text-gradient-silver block mb-2">We turn bold business</span>
              <span className="text-gradient">visions into realities.</span>
            </motion.h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-3xl mx-auto mb-16"
          >
            <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full opacity-50" />
            <p className="relative text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
              Premium, high-converting websites for <span className="text-foreground font-medium">dentists, doctors, cafes, restaurants, motorbike garages, auto service centers, retail shops</span> and service businesses worldwide.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <MagneticButton href="#contact" className="h-16 px-12 text-lg rounded-2xl shadow-glow-primary">
              Get Your Website <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <MagneticButton href="#projects" variant="ghost" className="h-16 px-12 text-lg rounded-2xl border-white/10 hover:border-primary/30">
              Explore Our Work
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground font-bold">Explore Horizon</span>
        <div className="w-px h-20 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;