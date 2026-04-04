'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import PlantGrowth from './animation/PlantGrowth';
import Watering from './animation/Watering';
import Leaves from './animation/Leaves';
import Success from './animation/Success';
import { Leaf, Droplets, Sprout, Heart, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Organic Growth',
    description: 'Every plant thrives with our natural growth formulas',
    animation: PlantGrowth,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
  },
  {
    icon: Droplets,
    title: 'Smart Watering',
    description: 'Precision hydration systems for optimal health',
    animation: Watering,
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
  },
  {
    icon: Sprout,
    title: 'Fresh Foliage',
    description: 'Lush leaves that bring life to any space',
    animation: Leaves,
    color: 'from-lime-500 to-green-600',
    bgColor: 'bg-lime-50 dark:bg-lime-950/20',
  },
];

export default function AnimationShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-white dark:from-gray-900 dark:via-green-950/10 dark:to-gray-900" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700 dark:text-green-400">Living Animations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Watch Your Garden <span className="text-green-600 italic">Bloom</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the magic of nature through our curated collection of botanical animations
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const Animation = feature.animation;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative ${feature.bgColor} rounded-[2.5rem] p-8 
                  border border-gray-200/50 dark:border-gray-700/50
                  hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500`}
              >
                {/* Icon Badge */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 
                  group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                  <Icon size={28} />
                </div>

                {/* Animation */}
                <div className="aspect-square mb-6 rounded-3xl overflow-hidden bg-white/50 dark:bg-gray-800/50
                  group-hover:shadow-inner transition-shadow duration-300">
                  <Animation className="w-full h-full" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Large Feature Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 
            p-12 md:p-20 shadow-2xl"
        >
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8"
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm font-bold">Crafted with Care</span>
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                From Seedling to Sanctuary
              </h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our animations bring the beauty of nature to life, showing the complete journey 
                from tiny seed to magnificent bloom. Perfect for understanding plant care cycles.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-bold text-sm">
                  🌱 Growth Tracking
                </div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-bold text-sm">
                  💧 Water Cycles
                </div>
                <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-bold text-sm">
                  🍃 Leaf Development
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-[500px]">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm p-8"
              >
                <PlantGrowth className="w-full h-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mini Animation Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { animation: PlantGrowth, label: 'Growth' },
            { animation: Watering, label: 'Care' },
            { animation: Leaves, label: 'Nature' },
            { animation: Success, label: 'Success' },
          ].map((item, index) => {
            const Animation = item.animation;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg 
                  hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300
                  border border-gray-100 dark:border-gray-700"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-green-50 dark:bg-green-950/20">
                  <Animation className="w-full h-full" />
                </div>
                <p className="text-center font-bold text-gray-700 dark:text-gray-300 group-hover:text-green-600 transition-colors">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
