'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import HeroScene from './HeroScene';
import FallingLeaves from './FallingLeaves';
import Success from './animation/Success';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero({ onGetStarted }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[105vh] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
         <img
            src="/hero-garden.jpg"
            alt="Blossom Greenhouse Background"
            className="w-full h-full object-cover opacity-80"
         />
         <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-white/40" />
         <div className="absolute inset-0 bg-linear-to-r from-white/30 via-white/40 to-transparent" />
      </div>

      <FallingLeaves />

      {/* 3D Canvas Container */}
      <div className="absolute inset-0 z-10 opacity-60 mix-blend-multiply pointer-events-none">
        <HeroScene />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 pt-20">
        <div ref={titleRef} className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 backdrop-blur-md rounded-full text-primary font-black text-xs uppercase tracking-[0.3em] mb-8"
          >
            <div className="w-5 h-5 flex items-center justify-center">
               <Success className="w-full h-full" />
            </div>
            New: Rare Inventory Sync v2.0
          </motion.div>

          <h1 className="text-primary mb-8 tracking-tight drop-shadow-sm font-black leading-none">
            Nurture Your Garden <br />
            Business with <span className="text-accent italic font-light serif text-[120%] tracking-tighter decoration-accent/20">Blossom POS</span>
          </h1>

          <p className="text-foreground/70 text-2xl md:text-3xl font-medium max-w-2xl mb-12 leading-relaxed">
            Streamline sales, track every plant with precision, and watch your nursery bloom with our high-performance 3D-integrated POS system.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-primary text-white rounded-3xl font-black text-xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group btn-glow relative overflow-hidden"
            >
              <span className="relative z-10">Launch Terminal</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-6 glass text-primary rounded-3xl font-black text-xl hover:bg-white/80 transition-all active:scale-95 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                <Success className="w-full h-full" />
              </div>
              Watch Demo
              <Sparkles className="text-accent ml-2 scale-0 group-hover:scale-100 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Centerpiece Lottie (WOW factor) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-150 h-150 pointer-events-none opacity-40 hidden xl:block">
          <Success className="w-full h-full" />
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-20 right-20 hidden xl:flex flex-col gap-6 z-20">
         <div className="glass p-6 rounded-3xl shadow-2xl border-white animate-pulse">
            <div className="text-xs font-black uppercase text-accent mb-1 tracking-widest">Active Sync</div>
            <div className="text-2xl font-black text-primary">99.9% Up-time</div>
         </div>
      </div>

      {/* Multi-page Navigation Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-20"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Scroll to Explore</span>
        <div className="w-0.5 h-12 bg-linear-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
