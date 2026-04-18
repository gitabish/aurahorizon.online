"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder, Lumina Dental",
    content: "Aurahorizon transformed our clinic's digital presence. We saw a 40% increase in bookings within the first month. Their attention to detail is unmatched.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Marcus Thorne",
    role: "CEO, Velocity Moto",
    content: "The 3D elements they integrated into our site aren't just eye-candy; they've significantly increased the time users spend on our page. Truly world-class work.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Elena Rodriguez",
    role: "Owner, The Roast Collective",
    content: "Working with Aurahorizon was the best investment we made this year. Our brand now feels as premium as our coffee. They really understood our vision.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Voices</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            What Our <span className="text-gradient">Partners Say</span>
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] px-4">
                <motion.div
                  animate={{ 
                    scale: selectedIndex === i ? 1 : 0.9,
                    opacity: selectedIndex === i ? 1 : 0.4
                  }}
                  className="relative p-12 md:p-20 rounded-[3rem] glass-premium text-center"
                >
                  <Quote className="w-12 h-12 text-primary/20 absolute top-12 left-12" />
                  
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl font-display leading-relaxed mb-12 italic">
                    "{t.content}"
                  </p>

                  <div className="flex flex-col items-center">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-20 h-20 rounded-full border-2 border-primary/30 mb-4 object-cover"
                    />
                    <div className="font-display font-bold text-xl">{t.name}</div>
                    <div className="text-muted-foreground uppercase tracking-widest text-xs mt-1">{t.role}</div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                selectedIndex === i ? "w-12 bg-primary" : "w-3 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;