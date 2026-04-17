import { motion } from "framer-motion";
import { Code2, Layers, Palette, Rocket, Sparkles, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Production-grade React, Next.js & TypeScript builds engineered for scale and speed.",
    accent: "from-primary to-secondary",
  },
  {
    icon: Layers,
    title: "3D & Immersive",
    description: "WebGL, Three.js and shader-driven experiences that turn pages into worlds.",
    accent: "from-secondary to-accent",
  },
  {
    icon: Palette,
    title: "Brand & UI Design",
    description: "Identity systems, design tokens and interfaces with personality and craft.",
    accent: "from-accent to-primary",
  },
  {
    icon: Zap,
    title: "Motion Design",
    description: "Choreographed micro-interactions with Framer Motion and GSAP that feel alive.",
    accent: "from-primary to-accent",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Core Web Vitals obsessed. Sub-second loads, perfect Lighthouse scores.",
    accent: "from-secondary to-primary",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Smart features powered by LLMs, embedded into your product experience.",
    accent: "from-accent to-secondary",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            What we do
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl">
            Services beyond <span className="text-gradient">the horizon</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A full-stack studio bringing strategy, design and engineering under one orbit.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl glass p-8 transition-shadow hover:shadow-glow-soft"
              >
                <div
                  className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30`}
                />
                <div className="relative">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} shadow-glow-soft`}>
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
