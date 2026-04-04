'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LeafIcon = ({ color, size, delay, left, opacity }) => (
  <motion.div
    initial={{ y: -100, opacity: 0, x: 0, rotate: 0 }}
    animate={{
      y: ['0vh', '110vh'],
      opacity: [opacity, opacity, 0],
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
      viewBox="0 0 100 100"
      fill={color}
      className="drop-shadow-lg"
    >
      {/* Realistic leaf shape with stem */}
      <path d="M50 5 
               C50 5, 80 20, 85 50 
               C90 80, 50 95, 50 95 
               C50 95, 10 80, 15 50 
               C20 20, 50 5, 50 5 Z" />
      {/* Leaf vein */}
      <path 
        d="M50 15 L50 85" 
        stroke="rgba(0,0,0,0.15)" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
      />
      {/* Side veins */}
      <path 
        d="M50 30 L35 45 M50 40 L65 55 M50 50 L38 62 M50 60 L62 72" 
        stroke="rgba(0,0,0,0.1)" 
        strokeWidth="1.5" 
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
);

export default function FallingLeaves() {
  const [mounted, setMounted] = useState(false);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setMounted(true);
    // Generate leaves only on client to avoid hydration mismatch
    const realGreenColors = [
      '#2d5016', // Dark forest green
      '#3a6b1e', // Deep green
      '#4a7c2e', // Rich green
      '#228B22', // Forest green
      '#32CD32', // Lime green
      '#6B8E23', // Olive drab
      '#556B2F', // Dark olive
      '#6a994e', // Sage green
      '#7cb342', // Fresh green
      '#4caf50', // Vibrant green
    ];
    
    const generatedLeaves = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: 25 + Math.random() * 40,
      color: realGreenColors[Math.floor(Math.random() * realGreenColors.length)],
      delay: Math.random() * 10,
      left: Math.random() * 100,
      opacity: 0.4 + Math.random() * 0.4,
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
