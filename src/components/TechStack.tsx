"use client";

import { motion } from "framer-motion";

const techs = [
  { name: "React 18", category: "Frontend" },
  { name: "Three.js", category: "3D Engine" },
  { name: "Framer Motion", category: "Animations" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "TypeScript", category: "Logic" },
  { name: "Vite", category: "Build Tool" },
  { name: "WebGL", category: "Graphics" },
  { name: "Radix UI", category: "Accessibility" },
];

const TechStack = () => {
  return (
    <section className="relative py-24 overflow-hidden border-y border-white/5">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-white/20 hover:text-primary transition-colors cursor-default">
                {tech.name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">
                {tech.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;