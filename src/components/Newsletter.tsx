"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Welcome to the horizon! You're subscribed.");
      setIsSubmitting(false);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-24 rounded-[4rem] glass-premium overflow-hidden text-center"
        >
          {/* Background Glow */}
          <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Stay Ahead of the Curve</span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
              Insights from the <br />
              <span className="text-gradient">Digital Frontier</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Join 2,000+ business owners receiving weekly strategies on design, conversion, and digital growth.
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full h-16 px-8 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all text-lg"
              />
              <button
                disabled={isSubmitting}
                className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-gradient-aurora text-background font-bold flex items-center justify-center gap-2 hover:shadow-glow-primary transition-all disabled:opacity-50"
              >
                {isSubmitting ? "..." : <Send className="w-5 h-5" />}
              </button>
            </form>
            
            <p className="mt-6 text-xs text-muted-foreground uppercase tracking-widest">
              No spam. Just pure value. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;