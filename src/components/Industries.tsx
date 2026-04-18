"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const industries = [
  {
    name: "Cafe & Restaurant",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    desc: "Smiling female barista holding a fresh menu, welcoming guests to a warm, artisanal space."
  },
  {
    name: "Motorbike Garage",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800",
    desc: "Friendly mechanic with a cap, holding tools, smiling confidently in a high-end workshop."
  },
  {
    name: "Auto Service Center",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    desc: "Confident mechanic holding a wrench, standing proudly in front of a premium vehicle."
  },
  {
    name: "Dental Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    desc: "Smiling dentist and assistant providing a comforting, professional environment for patients."
  },
  {
    name: "Medical Practice",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800",
    desc: "Confident doctor with a nurse, representing trust and excellence in modern healthcare."
  },
  {
    name: "Retail Shop & Vendor",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800",
    desc: "Friendly shop owner holding a signature product, showcasing the heart of local commerce."
  },
  {
    name: "Beauty Salon & Spa",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    desc: "Confident beautician in an elegant salon, dedicated to luxury and personal care."
  }
];

const IndustryCard = ({ industry, index }: { industry: typeof industries[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative min-w-[350px] md:min-w-[450px] h-[600px] rounded-[2.5rem] overflow-hidden group"
    >
      <img
        src={industry.image}
        alt={industry.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
      
      <div className="absolute inset-0 p-10 flex flex-col justify-end">
        <h3 className="font-display text-3xl font-bold mb-4 text-white">{industry.name}</h3>
        <p className="text-white/70 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {industry.desc}
        </p>
        <div className="mt-6 w-12 h-1 bg-primary rounded-full transition-all duration-500 group-hover:w-24" />
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
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Our Reach</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Industries <span className="text-gradient">We Serve</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Tailored digital solutions for businesses that value quality, trust, and exceptional customer experiences.
          </p>
        </div>
      </div>

      <div 
        ref={targetRef}
        className="flex gap-8 overflow-x-auto px-[5%] pb-12 no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {industries.map((industry, i) => (
          <IndustryCard key={industry.name} industry={industry} index={i} />
        ))}
      </div>

      {/* Custom Scroll Progress */}
      <div className="container mt-8">
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Industries;