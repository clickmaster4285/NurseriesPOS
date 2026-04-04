'use client';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Owner, GreenSpace Gardens',
    quote: "Blossom POS changed how we handle our spring rush. The 3D inventory visualization is a game-changer for my staff.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Operations Director, Petal & Stem',
    quote: "The real-time sales analytics helped us identify our top-performing succulents in weeks. High-contrast UI is perfect for greenhouse lighting.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Boutique Florist, Rooted Living',
    quote: "I love the glassmorphic design! It's aesthetic yet functional. The thermal receipt simulation adds a professional touch to our checkout.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 bg-[#fdfdfd] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-flex p-3 bg-primary/10 text-primary rounded-2xl">
            <Quote size={40} strokeWidth={2} />
          </div>
          <h2 className="text-primary tracking-tight">Trusted by over <span className="text-accent underline decoration-4 underline-offset-8">500+ Nurseries</span> worldwide.</h2>
          <p className="text-foreground/50 text-xl font-medium leading-relaxed">
            Our customers grow more than just plants—they grow their businesses with Blossom POS.
          </p>
          <div className="flex gap-4">
            <button onClick={prev} className="p-4 rounded-2xl bg-white border border-primary/10 hover:bg-primary/5 transition-all text-primary shadow-sm">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-4 rounded-2xl bg-white border border-primary/10 hover:bg-primary/5 transition-all text-primary shadow-sm">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass p-12 relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />

              <div className="flex gap-1 text-accent mb-8">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <blockquote className="text-2xl font-bold text-foreground/80 italic leading-relaxed mb-10">
                "{testimonials[index].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[index].avatar} 
                  alt={testimonials[index].name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-white/20 shadow-lg"
                />
                <div>
                  <h4 className="text-xl font-extrabold text-primary">{testimonials[index].name}</h4>
                  <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
