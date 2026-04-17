import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], [0, 16]);
  const bg = useTransform(scrollY, [0, 200], ["hsla(240,30%,4%,0)", "hsla(240,30%,4%,0.6)"]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ backdropFilter: useTransform(blur, (v) => `blur(${v}px)`), backgroundColor: bg }}
        className="border-b border-border/40"
      >
        <nav className="container flex h-16 items-center justify-between">
          <a href="#top" className="group flex items-center gap-2.5">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-7 w-7"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-aurora blur-md opacity-70" />
              <div className="relative h-full w-full rounded-full bg-gradient-aurora" />
              <div className="absolute inset-1 rounded-full bg-background" />
              <div className="absolute inset-2 rounded-full bg-gradient-aurora" />
            </motion.div>
            <span className="font-display text-lg font-semibold tracking-tight">
              Aura<span className="text-primary">.</span>horizon
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              >
                <a
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full border border-border bg-card/50 px-5 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:shadow-glow-soft md:inline-flex"
          >
            Get Your Website
          </a>

          <button className="md:hidden text-foreground" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Navigation;
