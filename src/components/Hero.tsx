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
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
        <HeroScene className="absolute inset-0" />
      </motion.div>

      <div className="absolute inset-0 z-0 grid-bg opacity-50" aria-hidden />

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
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
        >
          {["Professional Websites That", "Turn Visitors Into", "Loyal Customers"].map((line, i) => (
            <motion.span
              key={line}
              className="block"
              variants={{
                hidden: { opacity: 0, y: 60, rotateX: -45 },
                visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <span className={i === 1 ? "text-gradient" : "text-gradient-soft"}>{line}</span>
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          We design high-converting, mobile-first websites for dentists, doctors, medical practices, cafes, restaurants, motorbike garages, auto service centers, retail shops, vendors and service businesses worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#contact" variant="primary">
            Get Your Website <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#projects" variant="ghost">
            Explore Our Demo Work
          </MagneticButton>
        </motion.div>
      </motion.div>

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
