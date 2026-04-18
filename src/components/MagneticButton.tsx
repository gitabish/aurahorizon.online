import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}

const MagneticButton = ({ children, href, onClick, variant = "primary", className }: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });
  const innerX = useTransform(springX, (v) => v * 0.4);
  const innerY = useTransform(springY, (v) => v * 0.4);

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium text-sm tracking-wide transition-colors",
    variant === "primary" &&
      "bg-gradient-aurora text-primary-foreground shadow-glow-soft hover:shadow-glow-primary",
    variant === "ghost" &&
      "glass text-foreground hover:text-primary",
    className,
  );

  const Inner = (
    <motion.span style={{ x: innerX, y: innerY }} className="relative z-10 flex items-center gap-2">
      {children}
    </motion.span>
  );

  const motionProps = {
    style: { x: springX, y: springY },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: { scale: 0.96 },
    className: baseClasses,
  };

  if (href) {
    return (
      <motion.a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} {...motionProps}>
        {Inner}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref as React.RefObject<HTMLButtonElement>} onClick={onClick} {...motionProps}>
      {Inner}
    </motion.button>
  );
};

export default MagneticButton;