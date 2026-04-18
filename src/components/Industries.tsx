"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Cafe & Restaurant",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    desc: "Crafting artisanal digital spaces that capture the warmth and flavor of your hospitality."
  },
  {
    name: "Motorbike Garage",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800",
    desc: "High-octane digital presence for workshops that value precision and performance."
  },
  {
    name: "Auto Service Center",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    desc: "Building trust and authority for premium automotive service providers."
  },
  {
    name: "Dental Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    desc: "Comforting, professional environments that convert patients before they even walk in."
  },
  {
    name: "Medical Practice",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800",
    desc: "Excellence in modern healthcare represented through clean, high-trust digital design."
  },
  {
    name: "Retail & Boutique",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800",
    desc: "Showcasing the heart of local commerce with premium e-commerce experiences."
  },
  {
    name: "Beauty & Wellness",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    desc: "Luxury digital identities for salons and spas dedicated to personal care."
  }
];

const IndustryCard = ({ industry, index }: { industry: typeof industries[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative min-w-[320px] md:min-w-[480px] h-[650px] rounded-[3.5rem] overflow-hidden group cursor-pointer"
    >
      <img
        src={industry.image}
        alt={industry.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
      
      <div className="absolute inset-0 p-12 flex flex-col justify-end">
        <div className="mb-6 overflow-hidden">
          <motion.h3 
            className="font-display text-4xl font-bold text-white mb-4"
          >
            {industry.name}
          </motion.h3>
          <p className="text-white/60 text-lg leading-relaxed font-light translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
            {industry.desc}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-1 bg-primary rounded-full transition-all duration-500 group-hover:w-24" />
          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
};

const Industries = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: targetRef,
  });

  return (
    <section id="industries" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="container mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-8 border border-primary/20">
              Our Reach
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.1]">
              Industries <br />
              <span className="text-gradient">We Elevate.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-xl font-light max-w-md leading-relaxed">
            Tailored digital solutions for businesses that refuse to settle for average. We build for those who value quality and trust.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Custom Scroll Mask */}
        <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div 
          ref={targetRef}
          className="flex gap-10 overflow-x-auto px-[10%] pb-20 no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </div>
      </div>

      {/* Custom Scroll Progress Bar */}
      <div className="container">
        <div className="max-w-md mx-auto h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-aurora"
            style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Industries;