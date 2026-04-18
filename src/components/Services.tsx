"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Layers, Palette, Rocket, Zap, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  tag: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance, scalable web applications built with modern frameworks for ultimate speed and reliability.",
    color: "hsl(188 95% 50%)",
    tag: "Performance"
  },
  {
    icon: Layers,
    title: "3D & Immersive",
    description: "Captivating WebGL experiences and subtle 3D elements that make your brand unforgettable in the digital space.",
    color: "hsl(270 85% 60%)",
    tag: "Innovation"
  },
  {
    icon: Palette,
    title: "Brand & UI Design",
    description: "Elegant, high-end visual identities and user interfaces that build instant trust and professional authority.",
    color: "hsl(330 85% 60%)",
    tag: "Aesthetics"
  },
  {
    icon: Zap,
    title: "Motion Design",
    description: "Fluid, intentional animations and micro-interactions that guide users and bring your story to life.",
    color: "hsl(188 95% 50%)",
    tag: "Engagement"
  },
  {
    icon: Rocket,
    title: "Growth Strategy",
    description: "Meticulous optimization ensuring your site loads instantly, ranks higher, and provides a flawless user journey.",
    color: "hsl(270 85% 60%)",
    tag: "Conversion"
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full"
    >
      <div className="h-full p-10 rounded-[3rem] glass-premium transition-all duration-500 group-hover:bg-white/[0.08] border-white/5 flex flex-col">
        <div className="flex justify-between items-start mb-10">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-soft"
            style={{ backgroundColor: `${service.color}15`, color: service.color }}
          >
            <service.icon className="w-8 h-8" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
            {service.tag}
          </span>
        </div>
        
        <h3 className="font-display text-3xl font-bold mb-6 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed text-lg font-light mb-10 flex-1">
          {service.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          Learn More <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Subtle Background Glow */}
        <div 
          className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"
          style={{ backgroundColor: service.color }}
        />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-32 lg:py-48">
      <div className="container">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-8 border border-primary/20">
            <Zap className="w-3 h-3" />
            Our Expertise
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.1]">
            Services Beyond <br />
            <span className="text-gradient">the Digital Horizon.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;