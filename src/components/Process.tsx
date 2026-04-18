"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business DNA to uncover the unique value that sets you apart from the competition.",
  },
  {
    number: "02",
    title: "Cinematic Design",
    description: "Crafting a visual language that doesn't just look good, but tells a story and builds instant authority.",
  },
  {
    number: "03",
    title: "Precision Engineering",
    description: "Building lightning-fast, mobile-first experiences using the latest tech stack for ultimate performance.",
  },
  {
    number: "04",
    title: "Growth & Evolution",
    description: "We launch, monitor, and optimize to ensure your digital horizon keeps expanding and converting.",
  },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section id="process" ref={containerRef} className="relative py-32 lg:py-48">
      <div className="container">
        <div className="max-w-3xl mb-32">
          <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">The Trajectory</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            A Four-Phase <br />
            <span className="text-gradient">Journey to Growth</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ scaleY: pathLength, transformOrigin: "top" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-aurora -translate-x-1/2 hidden md:block"
          />

          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={`flex-1 text-center ${i % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                  <div className="inline-block font-display text-7xl md:text-9xl font-bold text-white/5 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Center Node */}
                <div className="relative z-10 w-16 h-16 rounded-full glass-premium flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-glow-primary animate-pulse" />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border border-primary/50"
                  />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;