'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, ShoppingCart, CheckCircle } from 'lucide-react';
import PlantGrowth from './animation/PlantGrowth';

const steps = [
  {
    icon: Search,
    title: 'Browse Collection',
    description: 'Explore our curated gallery of rare and indoor plants with detailed care information.',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: ShoppingCart,
    title: 'Add to Cart',
    description: 'Choose your size, quantity, and add to cart with real-time stock updates.',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: CheckCircle,
    title: 'Fast Checkout',
    description: 'Complete your purchase securely and track your order until it arrives fresh.',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-100 rounded-full mb-4">
            <span className="text-sm font-bold text-green-700">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            How It <span className="text-green-600 italic">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your dream plants in three easy steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 
            bg-gradient-to-r from-green-300 via-blue-300 to-purple-300" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl 
                  transition-all duration-300 group relative z-10">
                  {/* Step Number */}
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 
                    bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center 
                    text-white font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl ${step.bgColor} mb-6 
                    group-hover:scale-110 transition-transform duration-300 mt-4`}>
                    <Icon size={32} className={`text-transparent bg-gradient-to-r ${step.color} bg-clip-text`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#inventory"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r 
              from-green-600 to-emerald-600 text-white rounded-full font-bold text-lg 
              shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 
              hover:scale-105 transition-all duration-300"
          >
            Start Shopping
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
