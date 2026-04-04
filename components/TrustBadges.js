'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Truck, RefreshCw, CreditCard, Leaf, Award } from 'lucide-react';

const trustBadges = [
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '256-bit SSL encryption',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: '2-5 business days',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day guarantee',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: CreditCard,
    title: 'Safe Checkout',
    description: 'PCI compliant',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Leaf,
    title: 'Plant Guarantee',
    description: 'Healthy & fresh',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Expert inspected',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
];

export default function TrustBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl 
                  hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className={`inline-flex p-3 rounded-xl ${badge.bgColor} mb-3 
                  group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className={badge.color} />
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">{badge.title}</h4>
                <p className="text-xs text-gray-500">{badge.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
