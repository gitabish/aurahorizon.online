import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            About us
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl">
            Built to make businesses <span className="text-gradient">stand out</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            We are a passionate team dedicated to helping businesses worldwide break free from ordinary Google listings. We craft stunning, lightning-fast websites that don't just look beautiful — they actually attract more patients, customers, and growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
