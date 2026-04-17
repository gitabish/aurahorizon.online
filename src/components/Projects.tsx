import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Lumen Studios",
    category: "Brand site",
    year: "2025",
    description: "Cinematic portfolio for a creative studio with WebGL transitions between case studies.",
    tags: ["Next.js", "WebGL", "GSAP"],
    gradient: "from-primary/40 via-secondary/30 to-accent/40",
  },
  {
    title: "Orbit Finance",
    category: "Fintech app",
    year: "2025",
    description: "Realtime trading dashboard with 3D market visualization and biometric onboarding.",
    tags: ["React", "D3", "Three.js"],
    gradient: "from-secondary/40 via-primary/30 to-secondary/40",
  },
  {
    title: "Nebula Commerce",
    category: "E-commerce",
    year: "2024",
    description: "Headless storefront with shoppable 3D product configurator and AR try-on.",
    tags: ["Shopify", "R3F", "Edge"],
    gradient: "from-accent/40 via-secondary/30 to-primary/40",
  },
  {
    title: "Pulse OS",
    category: "SaaS platform",
    year: "2024",
    description: "AI-native operations platform with motion-led onboarding and command palette UX.",
    tags: ["TypeScript", "Framer", "AI"],
    gradient: "from-primary/40 via-accent/30 to-secondary/40",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 ? -2 : 2, index % 2 ? 2 : -2]);

  return (
    <motion.article
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="group relative"
    >
      <motion.div
        style={{ rotate }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[16/11] overflow-hidden rounded-3xl glass"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Floating decorative orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-12 top-12 h-32 w-32 rounded-full bg-primary/40 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-16 bottom-16 h-40 w-40 rounded-full bg-secondary/40 blur-3xl"
        />

        {/* Project mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-7xl font-bold tracking-tight text-foreground/10 sm:text-9xl">
            0{index + 1}
          </span>
        </div>

        <div className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </motion.div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>{project.category}</span>
            <span className="h-px w-8 bg-border" />
            <span>{project.year}</span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{project.title}</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Selected work
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl">
              Recent <span className="text-gradient">launches</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A glimpse into projects shipped with founders, agencies and brands across the globe.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
