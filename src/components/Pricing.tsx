import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface Plan {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "₹5,999",
    tagline: "Perfect starting point for small businesses and startups",
    features: [
      "5-page professional website",
      "Fully mobile-friendly design",
      "WhatsApp integration",
      "1 year domain + hosting",
    ],
  },
  {
    name: "Standard",
    price: "₹14,999",
    tagline: "Ideal for doctors, dentists and growing service businesses",
    features: [
      "Everything in Basic",
      "Online appointment booking form",
      "Beautiful photo gallery",
      "Basic SEO to help you rank higher",
      "Easy-to-update blog section",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹25,999",
    tagline: "Complete solution for ambitious businesses ready to scale",
    features: [
      "Everything in Standard",
      "Advanced animations & 3D elements",
      "Online payment options (if needed)",
      "Priority support and ongoing maintenance",
      "Superior speed and performance",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Pricing
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl">
            Our <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Transparent packages crafted to fit every stage of your business journey.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col overflow-hidden rounded-3xl glass p-8 ${
                plan.popular ? "glow-border shadow-glow-primary lg:scale-[1.04]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-aurora px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow-soft">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-gradient">{plan.price}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MagneticButton
                  href="#contact"
                  variant={plan.popular ? "primary" : "ghost"}
                  className="w-full"
                >
                  Get Started
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
