"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Layers, Palette, Rocket, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance, scalable web applications built with modern frameworks for ultimate speed and reliability.",
    color: "hsl(188 95% 50%)",
  },
  {
    icon: Layers,
    title: "3D & Immersive",
    description: "Captivating WebGL experiences and subtle 3D elements that make your brand unforgettable in the digital space.",
    color: "hsl(270 85% 60%)",
  },
  {
    icon: Palette,
    title: "Brand & UI Design",
    description: "Elegant, high-end visual identities and user interfaces that build instant trust and professional authority.",
    color: "hsl(330 85% 60%)",
  },
  {
    icon: Zap,
    title: "Motion Design",
    description: "Fluid, intentional animations and micro-interactions that guide users and bring your story to life.",
    color: "hsl(188 95% 50%)",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Meticulous optimization ensuring your site loads instantly, ranks higher, and provides a flawless user journey.",
    color: "hsl(270 85% 60%)",
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      <div className="h-full p-8 rounded-[2rem] glass-premium transition-all duration-500 group-hover:bg-white/10">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: `${service.color}20`, color: service.color }}
        >
          <service.icon className="w-7 h-7" />
        </div>
        
        <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        <div 
          className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <Zap className="w-5 h-5 text-primary" />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-32">
      <div className="container">
        <div className="max-w-3xl mb-20">
          <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Expertise</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Services Beyond <br />
            <span className="text-gradient">the Horizon</span>
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