"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Magnetic from "./Magnetic";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 12, 0)", "rgba(10, 10, 12, 0.8)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom: `1px solid ${borderOpacity}` }}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
    >
      <nav className="container h-20 flex items-center justify-between">
        <Magnetic strength={0.2}>
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-aurora rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-full h-full bg-background border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Aura<span className="text-primary">horizon</span>
            </span>
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Magnetic strength={0.3}>
                <a 
                  href={link.href}
                  className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em]"
                >
                  {link.label}
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Magnetic strength={0.2}>
            <a 
              href="#contact"
              className="px-8 py-3 rounded-full glass-premium text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-background transition-all duration-500"
            >
              Get Started
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`lg:hidden absolute top-20 left-0 right-0 glass-premium p-8 ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="space-y-6 text-center">
          {links.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Navigation;