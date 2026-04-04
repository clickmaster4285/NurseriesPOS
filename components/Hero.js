'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
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
      className="relative min-h-[105vh] flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
         <img
            src="/hero-garden.jpg"
            alt="Blossom Greenhouse Background"
            className="w-full h-full object-cover"
         />
         {/* Balanced overlay - middle ground between white and black */}
         <div className="absolute inset-0 bg-linear-to-b from-gray-900/30 via-transparent to-gray-900/50" />
         <div className="absolute inset-0 bg-linear-to-r from-gray-900/40 via-gray-900/10 to-transparent" />
         <div className="absolute inset-0 bg-linear-to-br from-green-900/25 via-transparent to-emerald-800/20" />
      </div>

      <FallingLeaves />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 pt-20">
        <div ref={titleRef} className="max-w-4xl">

          <h1 className="text-white mb-8 tracking-tight drop-shadow-lg font-black leading-none">
            Nurture Your Garden <br />
            Business with <span className="text-green-300 italic font-light serif text-[120%] tracking-tighter decoration-green-300/30">Blossom POS</span>
          </h1>

          <p className="text-white/90 text-2xl md:text-3xl font-medium max-w-2xl mb-12 leading-relaxed">
            Streamline sales, track every plant with precision, and watch your nursery bloom with our high-performance 3D-integrated POS system.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-6 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-3xl font-black text-xl shadow-2xl shadow-green-500/40 hover:scale-105 active:scale-95 transition-all group hover:from-green-500 hover:to-emerald-500"
            >
              <span className="relative z-10">Launch Terminal</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-6 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-3xl font-black text-xl hover:bg-white/30 transition-all active:scale-95 group">
              Watch Demo
              <Sparkles className="text-green-300 ml-2 scale-0 group-hover:scale-100 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Centerpiece Lottie (WOW factor) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-150 h-150 pointer-events-none opacity-50 hidden xl:block">
          <Success className="w-full h-full" />
      </div>

      {/* Hero Stats */}
      {/* Multi-page Navigation Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">Scroll to Explore</span>
        <div className="w-0.5 h-12 bg-linear-to-b from-white/70 to-transparent" />
      </motion.div>
    </section>
  );
}
