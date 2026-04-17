import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive into your goals, audience and brand DNA to map the mission ahead.",
  },
  {
    number: "02",
    title: "Design",
    description: "Concepts, prototypes and design systems shaped to your story and metrics.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Engineered with React, TypeScript and the modern web — fast, accessible, scalable.",
  },
  {
    number: "04",
    title: "Launch & evolve",
    description: "We ship, measure and iterate — your product gets sharper with every cycle.",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            How we work
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl">
            A trajectory <span className="text-gradient">in four phases</span>
          </h2>
        </motion.div>

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className={`${i % 2 === 1 ? "lg:text-right" : ""}`}>
                    <div className="font-display text-7xl font-bold text-gradient sm:text-8xl">
                      {step.number}
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-semibold">{step.title}</h3>
                    <p className="mt-3 max-w-md text-muted-foreground lg:max-w-sm">
                      {i % 2 === 1 ? <span className="lg:ml-auto lg:block">{step.description}</span> : step.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-background"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-aurora opacity-80 blur-md" />
                  <div className="relative h-12 w-12 rounded-full bg-background border border-primary/40 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary shadow-glow-primary" />
                  </div>
                </motion.div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
