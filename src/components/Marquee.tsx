import { motion } from "framer-motion";

const logos = [
  "LUMEN", "ORBIT", "NEBULA", "PULSE", "AURORA", "QUASAR", "ZENITH", "VECTOR",
];

const Marquee = () => {
  return (
    <section className="relative border-y border-border/40 py-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
      >
        Trusted by founders & teams worldwide
      </motion.div>
      <div className="relative flex overflow-hidden mask-fade">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="mx-12 font-display text-3xl font-semibold text-foreground/30 hover:text-foreground/80 transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Marquee;