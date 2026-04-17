import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
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

const IndustryCard = ({ name, image }: { name: string; image: string }) => {
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
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative w-[280px] shrink-0 sm:w-[320px]"
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
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const [paused, setPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (paused || !trackRef.current) return;
    const speed = 40; // px/sec
    offset.current -= (speed * delta) / 1000;
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (-offset.current >= halfWidth) {
      offset.current += halfWidth;
    }
    trackRef.current.style.transform = `translate3d(${offset.current}px, 0, 0)`;
  });

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

      <div
        className="relative mt-16 overflow-hidden pb-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          style={{ width: "max-content" }}
        >
          {[...industries, ...industries].map((ind, i) => (
            <IndustryCard key={`${ind.name}-${i}`} name={ind.name} image={ind.image} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default Industries;
