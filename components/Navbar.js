'use client';
import { ShoppingCart, Menu, X, MessageSquare, Info, Image as ImageIcon, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LogoMarquee from './LogoMarquee';

export default function Navbar({ onCartClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'About Us', icon: Info, href: '/about' },
    { name: 'Gallery', icon: ImageIcon, href: '/#inventory' },
    { name: 'Contact Us', icon: MessageSquare, href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-0' : 'py-0'
      }`}
    >
      <LogoMarquee />
      
      <div className={`transition-all duration-300 ${isScrolled ? 'px-4 py-2' : 'px-6 py-4'}`}>
        <div className={`max-w-7xl mx-auto glass flex items-center justify-between px-6 py-3 transition-all duration-300 ${
          isScrolled ? 'shadow-lg bg-white/80' : 'bg-white/40'
        }`}>
          {/* Logo with Lottie Animation */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-xl overflow-hidden group-hover:rotate-12 transition-transform duration-300 shadow-xl shadow-primary/20">
               <DotLottieReact
                  src="https://lottie.host/47e8315a-17d6-476b-ba34-0919e1ece75c/ia8F7O65zZ.lottie"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%', scale: 1.5 }}
                />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-primary">
              Blossom<span className="text-accent">POS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 font-bold text-foreground/70 hover:text-primary transition-all cursor-pointer relative group/link"
              >
                <link.icon size={18} className="opacity-40 group-hover/link:opacity-100 transition-opacity" />
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
              </Link>
            ))}
            
            <button 
              onClick={onCartClick}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-extrabold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <ShoppingCart size={18} className="relative z-10" />
              <span className="relative z-10">Cart</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-32 left-4 right-4 glass p-8 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-xl font-extrabold text-foreground/80 hover:text-primary p-4 hover:bg-primary/5 rounded-2xl transition-all"
              >
                <link.icon size={24} />
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => { setIsMenuOpen(false); onCartClick(); }}
              className="mt-4 flex items-center justify-center gap-3 w-full py-5 bg-primary text-white rounded-2xl font-black text-xl shadow-xl shadow-primary/20"
            >
              <ShoppingCart size={24} />
              Open Cart
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
