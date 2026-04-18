"use client";

import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Feedback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you shortly.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="feedback" className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Feedback</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
              Your Voice <br />
              <span className="text-gradient">Matters to Us</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Whether you have a question, a suggestion, or just want to say hi, we're all ears. Your feedback helps us refine our horizon.
            </p>
            
            <div className="flex items-center gap-6 p-8 rounded-3xl glass-premium">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="font-display font-bold text-xl">Direct Support</div>
                <div className="text-muted-foreground">Average response time: 2 hours</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-aurora blur-[100px] opacity-10" />
            <form onSubmit={handleSubmit} className="relative p-10 rounded-[3rem] glass-premium space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest ml-2">Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest ml-2">Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full h-14 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest ml-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us what's on your mind..."
                  className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors resize-none"
                />
              </div>
              
              <button 
                disabled={isSubmitting}
                className="w-full h-16 rounded-2xl bg-gradient-aurora text-background font-bold text-lg flex items-center justify-center gap-3 hover:shadow-glow-primary transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;