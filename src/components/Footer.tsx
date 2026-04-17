import { Mail, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-14">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2.5">
            <div className="relative h-7 w-7">
              <div className="absolute inset-0 rounded-full bg-gradient-aurora blur-md opacity-70" />
              <div className="relative h-full w-full rounded-full bg-gradient-aurora" />
              <div className="absolute inset-1 rounded-full bg-background" />
              <div className="absolute inset-2 rounded-full bg-gradient-aurora" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              Aura<span className="text-primary">.</span>horizon
            </span>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
            <a href="mailto:helloaurahorizon@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="h-4 w-4 text-primary" />
              helloaurahorizon@gmail.com
            </a>
            <a href="tel:+919342735182" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4 text-secondary" />
              +91 9342735182
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center border-t border-border/40 pt-6 text-xs text-muted-foreground">
          <span>© Aurahorizon 2026</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
