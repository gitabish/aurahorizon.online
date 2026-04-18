"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="container">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-aurora rounded-xl blur-md opacity-50" />
                <div className="relative w-full h-full bg-background border border-white/10 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Aura<span className="text-primary">horizon</span>
              </span>
            </a>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              Crafting digital horizons for businesses that value quality, trust, and exceptional growth.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {["About", "Services", "Work", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4 mb-8">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl glass-premium flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="space-y-4">
              <a href="mailto:helloaurahorizon@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                helloaurahorizon@gmail.com
              </a>
              <a href="tel:+919342735182" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 9342735182
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-sm text-muted-foreground">
          <p>© 2026 Aurahorizon. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;