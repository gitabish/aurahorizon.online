"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most of our projects are completed within 4 to 8 weeks, depending on the complexity and specific requirements. We prioritize quality and precision at every stage.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes, all our plans include premium hosting and maintenance for the first year. We ensure your site remains fast, secure, and up-to-date.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. We follow a mobile-first design philosophy, ensuring your website looks and performs flawlessly on every device, from smartphones to large desktops.",
  },
  {
    question: "Can you help with SEO and ranking?",
    answer: "Yes, basic SEO is included in all our plans. Our Standard and Premium plans include advanced strategies to help you rank higher and attract more local customers.",
  },
  {
    question: "What happens after the website is launched?",
    answer: "We don't just disappear. We provide ongoing support and can help with updates, new features, and marketing strategies to ensure your digital horizon keeps expanding.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Clarity</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
              Frequently Asked <br />
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Everything you need to know about starting your journey with Aurahorizon. Can't find what you're looking for? Reach out to us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="border-none glass-premium rounded-2xl px-8"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-bold hover:no-underline hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;