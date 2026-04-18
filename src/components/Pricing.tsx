"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

const plans = [
  {
    name: "Basic",
    price: "₹5,999",
    desc: "Essential digital presence for startups.",
    features: [
      "5-Page Professional Site",
      "Mobile-First Design",
      "WhatsApp Integration",
      "1 Year Domain & Hosting",
      "Basic SEO Setup"
    ],
    color: "hsl(188 95% 50%)"
  },
  {
    name: "Standard",
    price: "₹11,999",
    desc: "The gold standard for growing businesses.",
    features: [
      "Everything in Basic",
      "Online Booking System",
      "Premium Photo Gallery",
      "Advanced SEO Strategy",
      "Blog & Content CMS",
      "Priority Email Support"
    ],
    popular: true,
    color: "hsl(270 85% 60%)"
  },
  {
    name: "Premium",
    price: "₹17,999",
    desc: "Uncompromising quality for market leaders.",
    features: [
      "Everything in Standard",
      "Custom 3D Elements",
      "E-commerce Integration",
      "Performance Optimization",
      "Monthly Maintenance",
      "24/7 Priority Support"
    ],
    color: "hsl(330 85% 60%)"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Investment</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium digital experiences at prices that make sense for your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] glass-premium flex flex-col ${
                plan.popular ? "border-primary/50 ring-1 ring-primary/20 scale-105 z-10" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-aurora text-white text-sm font-bold flex items-center gap-2 shadow-glow-primary">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.desc}</p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-bold text-gradient">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <MagneticButton 
                href="#contact" 
                variant={plan.popular ? "primary" : "ghost"}
                className="w-full h-14"
              >
                Get Started <Zap className="ml-2 w-4 h-4" />
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;