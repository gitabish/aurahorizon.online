"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create a subtle "weighted" parallax effect for the entire content
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const springY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div 
      ref={containerRef}
      style={{ y: springY }}
      className="relative will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;