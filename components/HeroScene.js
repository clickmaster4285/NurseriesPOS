'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function PlantModel() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.position.y = Math.sin(time) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Abstract Plant representation */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 2, 16]} />
        <meshStandardMaterial color="#8d6e63" roughness={0.8} />
      </mesh>
      
      {/* Abstract leaves/blooms */}
      {[0, 1, 2, 3].map((i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
          <mesh position={[Math.sin(i) * 0.8, i * 0.5 - 0.2, Math.cos(i) * 0.8]} rotation={[0.5, i * 1.5, 0]}>
            <coneGeometry args={[0.6, 1, 3]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#4caf50" : "#1b5e20"} roughness={0.4} />
          </mesh>
        </Float>
      ))}

      {/* Central bloom */}
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial color="#f48fb1" speed={2} distort={0.6} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <PlantModel />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/40 to-background pointer-events-none" />
    </div>
  );
}
