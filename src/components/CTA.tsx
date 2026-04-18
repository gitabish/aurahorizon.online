"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[4rem] glass-premium p-12 md:p-24 text-center overflow-hidden"
        >
          {/* Background Aurora */}
          <div className="absolute inset-0 bg-gradient-aurora opacity-5 blur-[100px]" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ready to transcend the ordinary?</span>
            </motion.div>

            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-12">
              Let's build your <br />
              <span className="text-gradient">digital legacy</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
              Join the elite businesses that have already expanded their horizons with our premium digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <MagneticButton href="#contact" className="h-20 px-16 text-xl rounded-[2rem]">
                Start Your Journey <ArrowRight className="ml-3 w-6 h-6" />
              </MagneticButton>
              <a 
                href="mailto:helloaurahorizon@gmail.com" 
                className="text-lg font-medium hover:text-primary transition-colors underline underline-offset-8"
              >
                Or send us an email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
    </section>
  );
};

export default CTA;