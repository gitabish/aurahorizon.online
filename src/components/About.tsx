"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="relative py-32 lg:py-56 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-8 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Our Philosophy
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-10">
              Your Story Deserves <br />
              <span className="text-gradient">More Than a Pin.</span>
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                In a world of template-driven designs and generic digital footprints, most businesses are reduced to a mere pin on a map—a boring Google listing lost in a sea of identical profiles.
              </p>
              <p>
                We believe your passion, your craft, and your business deserve a <span className="text-foreground font-medium">digital lighthouse.</span> A presence that doesn't just exist, but commands attention and builds instant authority.
              </p>
              <p>
                Aurahorizon was founded by a team of visionaries who grew tired of seeing exceptional service businesses hidden behind mediocre websites. We're here to break you free from the ordinary.
              </p>
              <div className="pt-6">
                <p className="text-foreground font-medium border-l-2 border-primary pl-8 italic">
                  "We don't just build websites; we architect digital growth engines that turn curious visitors into lifelong customers."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] lg:aspect-square"
          >
            {/* Animated Background Elements */}
            <div className="absolute -inset-10 bg-gradient-aurora rounded-[4rem] blur-[100px] opacity-10 animate-pulse-glow" />
            
            <motion.div 
              style={{ y }}
              className="relative h-full w-full rounded-[4rem] glass-premium overflow-hidden flex items-center justify-center p-12 border-white/5"
            >
              <div className="text-center relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-8xl md:text-[10rem] font-display font-bold text-gradient leading-none mb-4"
                >
                  150+
                </motion.div>
                <div className="text-sm md:text-base font-display text-muted-foreground uppercase tracking-[0.4em] font-bold">
                  Digital Horizons Expanded
                </div>
              </div>
              
              {/* Decorative Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full pointer-events-none opacity-50" />
              
              {/* Floating Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-2 h-2 bg-primary rounded-full blur-sm"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${10 + i * 35}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;