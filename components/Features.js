'use client';
import { Leaf, Truck, ShieldCheck, Heart, Sprout, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const aboutHighlights = [
  {
    title: 'Heritage Growth',
    desc: 'Founded in 1984, our nursery has been at the forefront of sustainable cultivation for over four decades.',
    icon: Landmark,
    color: '#1b5e20'
  },
  {
    title: 'Botanical Precision',
    desc: 'Every specimen is tracked from seedling to sale, ensuring perfect health and genetic purity.',
    icon: Sprout,
    color: '#4caf50'
  },
  {
    title: 'State-wide Delivery',
    desc: 'Our proprietary fragile-route logistics ensure your plants arrive in greenhouse-fresh condition.',
    icon: Truck,
    color: '#8d6e63'
  },
  {
    title: 'Health Certified',
    desc: 'Every plant passes a rigorous 12-point inspector check before being added to our curated gallery.',
    icon: ShieldCheck,
    color: '#1b5e20'
  },
  {
    title: 'Sustainable Packaging',
    desc: 'We use 100% plastic-free, biodegradable shipping materials to protect the earth we cultivate.',
    icon: Leaf,
    color: '#4caf50'
  },
  {
    title: 'Collector Rewards',
    desc: 'Join our Mycelium network for exclusive access to rare drops and botanical care workshops.',
    icon: Heart,
    color: '#8d6e63'
  }
];

export default function Features() {
  return (
    <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between mb-24 text-left">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 text-accent font-black tracking-widest uppercase text-xs mb-4">
            <span className="w-12 h-0.5 bg-accent" />
            Our Heritage
          </div>
          <h2 className="text-primary mb-6 drop-shadow-sm leading-none">
            Cultivated for Generations
          </h2>
          <p className="text-foreground/50 text-xl font-medium leading-relaxed">
            Blossom is more than a botanical gallery; it is a legacy of green expertise. We bridge the gap between high-fidelity technology and the ancient art of horticulture.
          </p>
        </div>
        
        <div className="hidden lg:block pb-5">
           <Landmark size={80} strokeWidth={1} className="text-primary/10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {aboutHighlights.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group flex flex-col items-start p-8 hover:bg-primary/5 rounded-[40px] transition-all duration-500"
          >
            <div 
              className="p-5 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-black/5"
              style={{ backgroundColor: `${f.color}15`, color: f.color }}
            >
              <f.icon size={32} />
            </div>
            <h3 className="text-2xl font-black text-primary mb-4 group-hover:translate-x-2 transition-transform duration-300">{f.title}</h3>
            <p className="text-foreground/60 font-medium leading-relaxed text-sm md:text-base">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Botanical Graphic */}
      <div className="mt-32 text-center opacity-10">
         <div className="text-[120px] font-black uppercase tracking-tighter text-primary whitespace-nowrap overflow-hidden">
            Est. 1984 - Botanical - Excellence - Rare - Organic
         </div>
      </div>
    </section>
  );
}
