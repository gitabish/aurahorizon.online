"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-8xl md:text-[12rem] font-bold text-white/5 select-none"
            >
              {count}%
            </motion.div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                className="h-px bg-primary shadow-glow-primary"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
              Initializing Horizon
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;