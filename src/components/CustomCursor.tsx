"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "drag">("default");

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("#projects div")) {
        setCursorState("view");
      } else if (target.closest(".cursor-grab")) {
        setCursorState("drag");
      } else if (target.closest("a, button, input, textarea")) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        scale: cursorState === "default" ? 1 : cursorState === "hover" ? 2.5 : 3.5,
        backgroundColor: cursorState === "default" ? "rgba(34, 211, 238, 0.5)" : "rgba(34, 211, 238, 0.2)",
      }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference backdrop-blur-sm border border-primary/30 hidden lg:flex items-center justify-center overflow-hidden"
    >
      {(cursorState === "view" || cursorState === "drag") && (
        <motion.span 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[4px] font-bold uppercase tracking-tighter text-primary-glow"
        >
          {cursorState}
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;