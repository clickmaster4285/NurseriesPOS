'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Leaf, Users, Package, Award } from 'lucide-react';

const stats = [
  {
    icon: Leaf,
    value: 10000,
    suffix: '+',
    label: 'Plants Sold',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Happy Nurseries',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Package,
    value: 50,
    suffix: '+',
    label: 'States Served',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Award,
    value: 99.9,
    suffix: '%',
    label: 'Uptime',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
  },
];

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? count.toLocaleString() : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`inline-flex p-4 rounded-2xl ${stat.bgColor} mb-4 
                  group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`} />
                </div>
                <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
