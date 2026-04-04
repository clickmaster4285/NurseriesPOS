'use client';
import { motion } from 'framer-motion';
import { Leaf, Sprout, Landmark, Heart, ShieldCheck, Truck } from 'lucide-react';

const logos = [
  { name: 'NatureTrust', icon: Leaf },
  { name: 'SeedCo', icon: Sprout },
  { name: 'GreenThumb', icon: Heart },
  { name: 'BotanicalSociety', icon: Landmark },
  { name: 'EcoGrowth', icon: ShieldCheck },
  { name: 'ForestDirect', icon: Truck },
];

export default function LogoMarquee() {
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-primary/95 backdrop-blur-md py-3 overflow-hidden border-b border-white/10 relative z-60">
      <motion.div 
        animate={{ x: [0, -1500] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex items-center gap-16 whitespace-nowrap w-fit"
      >
        {marqueeLogos.map((logo, idx) => (
          <div key={idx} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-default shrink-0">
            <logo.icon size={14} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">{logo.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
