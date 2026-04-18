"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Lumina Dental",
    category: "Medical / Branding",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "The Roast Collective",
    category: "Hospitality / E-commerce",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Velocity Moto",
    category: "Automotive / Performance",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Zenith Spa",
    category: "Wellness / Booking",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden glass-premium"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
        />
      </motion.div>
      
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-overlay`} />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      <div className="absolute inset-0 p-12 flex flex-col justify-end">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-primary font-display text-sm uppercase tracking-widest mb-2 block">
              {project.category}
            </span>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          
          <div className="w-16 h-16 rounded-full glass-premium flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-500">
            <ArrowUpRight className="w-8 h-8" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 lg:py-48">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Selected Work</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Digital <span className="text-gradient">Masterpieces</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            A collection of high-converting experiences crafted for businesses that refuse to be average.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;