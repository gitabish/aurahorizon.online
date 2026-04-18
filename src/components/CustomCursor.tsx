"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, input, textarea"));
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
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(34, 211, 238, 0.2)" : "rgba(34, 211, 238, 0.5)",
      }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference backdrop-blur-sm border border-primary/30 hidden lg:block"
    />
  );
};

export default CustomCursor;