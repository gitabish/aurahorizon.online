import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import cafeImg from "@/assets/industry-cafe.jpg";
import motorbikeImg from "@/assets/industry-motorbike.jpg";
import autoImg from "@/assets/industry-auto.jpg";
import dentalImg from "@/assets/industry-dental.jpg";
import medicalImg from "@/assets/industry-medical.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import salonImg from "@/assets/industry-salon.jpg";

const industries = [
  { name: "Cafe & Restaurant", image: cafeImg },
  { name: "Motorbike Garage", image: motorbikeImg },
  { name: "Auto Service Center", image: autoImg },
  { name: "Dental Clinic", image: dentalImg },
  { name: "Medical Practice", image: medicalImg },
  { name: "Retail Shop & Vendor", image: retailImg },
  { name: "Beauty Salon & Spa", image: salonImg },
];

const IndustryCard = ({ name, image, index }: { name: string; image: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rxs = useSpring(rx, { stiffness: 200, damping: 20 });
  const rys = useSpring(ry, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(rxs, (v) => `${v}deg`);
  const rotateY = useTransform(rys, (v) => `${v}deg`);

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 12);
    rx.set(-py * 12);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative w-[280px] shrink-0 sm:w-[320px] snap-center"
    >
      <div className="relative overflow-hidden rounded-3xl glass shadow-elegant">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={`${name} professional`}
            loading="lazy"
            width={768}
            height={960}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        <div className="relative p-6">
          <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
            {name}
          </h3>
          <div className="mt-3 h-px w-12 bg-gradient-aurora transition-all duration-500 group-hover:w-24" />
        </div>
      </div>
    </motion.div>
  );
};

const Industries = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
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
              Industries <span className="text-gradient">We Serve</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From local favorites to growing enterprises, we create tailored digital experiences for businesses across the globe.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-6 px-6 sm:px-12 lg:px-20" style={{ width: "max-content" }}>
          {industries.map((ind, i) => (
            <IndustryCard key={ind.name} name={ind.name} image={ind.image} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
