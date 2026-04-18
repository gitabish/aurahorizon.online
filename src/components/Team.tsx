"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Magnetic from "./Magnetic";

const team = [
  {
    name: "Aryan Sharma",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Visionary designer with a passion for cinematic digital experiences.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Priya Patel",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    bio: "Architecting high-performance systems that scale with your growth.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Vikram Singh",
    role: "UX Strategist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Turning complex user journeys into seamless, high-converting paths.",
    social: { twitter: "#", linkedin: "#", github: "#" }
  }
];

const Team = () => {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">The Minds</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Behind the <span className="text-gradient">Horizon</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 glass-premium">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-center gap-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  {[Twitter, Linkedin, Github].map((Icon, idx) => (
                    <Magnetic key={idx} strength={0.2}>
                      <a href="#" className="w-10 h-10 rounded-full glass-premium flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="font-display text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px] mx-auto">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;