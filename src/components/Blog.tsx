"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import MagneticButton from "./MagneticButton";

const posts = [
  {
    title: "The Future of Web Design: 3D & Immersive Experiences",
    excerpt: "How WebGL and React Three Fiber are changing the way we interact with brands online.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    category: "Design"
  },
  {
    title: "Maximizing Conversion: The Psychology of High-End UI",
    excerpt: "Why premium aesthetics build instant trust and how to leverage them for your business.",
    date: "Oct 08, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "Strategy"
  },
  {
    title: "Performance Matters: Why Speed is the Ultimate Luxury",
    excerpt: "A deep dive into how we achieve lightning-fast load times without compromising on visuals.",
    date: "Sep 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Tech"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="relative py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Insights</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              From the <span className="text-gradient">Digital Frontier</span>
            </h2>
          </div>
          <MagneticButton variant="ghost" className="h-14 px-10">
            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </MagneticButton>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 glass-premium">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary">
                  {post.category}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-xs text-muted-foreground uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;