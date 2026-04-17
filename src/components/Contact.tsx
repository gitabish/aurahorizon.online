import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Mail, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] glass p-10 sm:p-16 lg:p-24 noise"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-aurora blur-3xl"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full border border-primary/20"
          />

          <div className="relative text-center">
            <span className="inline-block rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Let's build
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Have a vision <br className="hidden sm:block" />
              <span className="text-gradient">on the horizon?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Ready to elevate your business online? Tell us about your project. We respond within 24 hours and carefully select only a few partners each quarter.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MagneticButton href="mailto:helloaurahorizon@gmail.com" variant="primary">
                Get Your Website <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#projects" variant="ghost">
                See Our Demo Work
              </MagneticButton>
            </div>

            <div className="mt-16 flex flex-col items-center justify-center gap-6 text-sm text-muted-foreground sm:flex-row sm:gap-12">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
