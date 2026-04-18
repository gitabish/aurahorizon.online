"use client";

import { motion } from "framer-motion";

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full blur-[100px]"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? "hsl(188 95% 50% / 0.1)" : "hsl(270 85% 60% / 0.1)",
          }}
        />
      ))}
      
      {/* Static Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(10,10,12,0)_0%,rgba(10,10,12,1)_100%)]" />
    </div>
  );
};

export default FloatingBackground;