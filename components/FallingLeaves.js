'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LeafIcon = ({ color, size, delay, left }) => (
  <motion.div
    initial={{ y: -100, opacity: 0, x: 0, rotate: 0 }}
    animate={{ 
      y: ['0vh', '110vh'], 
      opacity: [1, 1, 0],
      x: [0, 50, -50, 20],
      rotate: [0, 360, 720]
    }}
    transition={{ 
      duration: 10 + Math.random() * 10, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear"
    }}
    style={{ 
      position: 'absolute', 
      left: `${left}%`, 
      zIndex: 5,
      pointerEvents: 'none'
    }}
  >
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="opacity-20"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7 7 0 0 1-9 10Z" />
      <path d="M19 2v5h-5" />
    </svg>
  </motion.div>
);

export default function FallingLeaves() {
  const [mounted, setMounted] = useState(false);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setMounted(true);
    // Generate leaves only on client to avoid hydration mismatch
    const generatedLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: 20 + Math.random() * 30,
      color: i % 2 === 0 ? '#1b5e20' : '#8d6e63',
      delay: Math.random() * 10,
      left: Math.random() * 100,
    }));
    setLeaves(generatedLeaves);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <LeafIcon key={leaf.id} {...leaf} />
      ))}
    </div>
  );
}
