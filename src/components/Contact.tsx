"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Mail, Phone, ArrowRight, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 lg:py-48">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[4rem] glass-premium p-12 md:p-24 overflow-hidden"
        >
          {/* Background Glows */}
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Get in Touch</span>
              <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
                Have a vision <br />
                <span className="text-gradient">on the horizon?</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-md">
                We're currently accepting new projects for the next quarter. Let's build something extraordinary together.
              </p>

              <div className="space-y-6">
                <a 
                  href="mailto:helloaurahorizon@gmail.com" 
                  className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full glass-premium flex items-center justify-center group-hover:bg-primary/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  helloaurahorizon@gmail.com
                </a>
                <a 
                  href="tel:+919342735182" 
                  className="flex items-center gap-4 text-lg hover:text-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full glass-premium flex items-center justify-center group-hover:bg-secondary/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  +91 9342735182
                </a>
                <div className="flex items-center gap-4 text-lg text-muted-foreground">
                  <div className="w-12 h-12 rounded-full glass-premium flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  Serving Clients Worldwide
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-8">
              <div className="text-center lg:text-right">
                <div className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Ready to start?</div>
                <MagneticButton href="mailto:helloaurahorizon@gmail.com" className="h-20 px-16 text-xl rounded-[2rem]">
                  Book a Call <ArrowRight className="ml-3 w-6 h-6" />
                </MagneticButton>
              </div>
              
              <div className="p-8 rounded-3xl glass-premium max-w-xs text-center lg:text-right">
                <p className="text-sm italic text-muted-foreground">
                  "Aurahorizon transformed our clinic's digital presence. We saw a 40% increase in bookings within the first month."
                </p>
                <div className="mt-4 font-display font-bold">— Dr. Sarah Chen</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;