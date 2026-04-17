import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroScene from "./HeroScene";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* 3D scene */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
        <HeroScene className="absolute inset-0" />
      </motion.div>

      {/* Grid backdrop */}
      <div className="absolute inset-0 z-0 grid-bg opacity-50" aria-hidden />

      {/* Foreground content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container flex min-h-screen flex-col items-center justify-center text-center pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Crafting horizons in digital space</span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
        >
          {["Nova", "Horizon"].map((word, i) => (
            <motion.span
              key={word}
              className="block"
              variants={{
                hidden: { opacity: 0, y: 60, rotateX: -45 },
                visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <span className={i === 1 ? "text-gradient" : "text-gradient-soft"}>{word}</span>
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          A web development agency building immersive, high-performance digital
          products powered by motion, 3D, and obsession with detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#projects" variant="primary">
            View our work <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Start a project
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
