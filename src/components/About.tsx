"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Our Story</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
              Moving beyond the <span className="text-gradient">ordinary</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most businesses are trapped in the "Google Listing Limbo" — a sea of identical profiles where the only differentiator is a star rating. We believe your business deserves more than just a spot on a map.
              </p>
              <p>
                Aurahorizon was born from a simple realization: small and medium businesses are the backbone of our communities, yet their digital presence often fails to reflect their true value. We're a team of passionate designers and engineers dedicated to changing that.
              </p>
              <p className="text-foreground font-medium">
                We don't just build websites; we craft digital growth engines that capture your brand's soul and convert curiosity into long-term loyalty.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-aurora rounded-[3rem] blur-3xl opacity-20 animate-pulse-glow" />
            <div className="relative h-full w-full rounded-[3rem] glass-premium overflow-hidden flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-7xl md:text-9xl font-display font-bold text-gradient mb-4">12+</div>
                <div className="text-xl md:text-2xl font-display text-muted-foreground uppercase tracking-widest">Years of Excellence</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full" />
              <div className="absolute bottom-20 right-10 w-32 h-32 border border-secondary/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;