"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Zap, Thermometer, Shield, Music, Sun, Wind, Lightbulb, Wifi } from "lucide-react";

// Smart Home Building Component
function SmartHomeModel() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const zones = [
    { id: "living", position: [0, 0, 0] as [number, number, number], icon: Lightbulb },
    { id: "kitchen", position: [2, 0, 0] as [number, number, number], icon: Zap },
    { id: "bedroom", position: [-2, 0, 0] as [number, number, number], icon: Moon },
    { id: "climate", position: [0, 2, 0] as [number, number, number], icon: Thermometer },
  ];

  return (
    <group ref={groupRef}>
      {/* Building Base */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 0.2, 3]} />
        <meshStandardMaterial color="#1a1a1d" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Main Structure */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[4, 2, 3]} />
        <meshStandardMaterial 
          color="#121214" 
          metalness={0.6} 
          roughness={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Windows - Glowing */}
      {[[-1.5, 1, 1.51], [1.5, 1, 1.51], [-1.5, 1, -1.51], [1.5, 1, -1.51]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.8, 0.8, 0.05]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff"
            emissiveIntensity={0.5 + Math.sin(i) * 0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

      {/* Roof */}
      <mesh position={[0, 2.5, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[3, 1, 4]} />
        <meshStandardMaterial color="#2a2a2e" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* KNX/Loxone Core - Central Hub */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[0, 0.5, 0]}>
          <octahedronGeometry args={[0.3]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff"
            emissiveIntensity={1}
          />
        </mesh>
      </Float>

      {/* Connection Lines */}
      {zones.map((zone, i) => (
        <line key={zone.id}>
          <bufferGeometry>
            <float32BufferAttribute attach="attributes-position" count={2} array={new Float32Array([0, 0.5, 0, ...zone.position])} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" transparent opacity={0.4} />
        </line>
      ))}

      {/* Zone Markers */}
      {zones.map((zone) => {
        const IconComponent = zone.icon;
        return (
          <group 
            key={zone.id} 
            position={zone.position}
            onPointerOver={() => setHoveredZone(zone.id)}
            onPointerOut={() => setHoveredZone(null)}
          >
            <mesh>
              <sphereGeometry args={[0.15]} />
              <meshStandardMaterial 
                color={hoveredZone === zone.id ? "#00d4ff" : "#6b7280"} 
                emissive={hoveredZone === zone.id ? "#00d4ff" : "#000000"}
                emissiveIntensity={hoveredZone === zone.id ? 0.5 : 0}
              />
            </mesh>
          </group>
        );
      })}

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <Particle key={i} position={[
          (Math.random() - 0.5) * 6,
          Math.random() * 3,
          (Math.random() - 0.5) * 5
        ]} />
      ))}
    </group>
  );
}

function Particle({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current && ref.current.material instanceof THREE.Material) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
      ref.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime + position[1]) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.03]} />
      <meshStandardMaterial color="#00d4ff" transparent opacity={0.4} />
    </mesh>
  );
}

function Moon({ ...props }: any) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ width: '1em', height: '1em' }}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

interface SmartHomeSceneProps {
  onZoneClick?: (zone: string) => void;
}

export function SmartHomeScene({ onZoneClick }: SmartHomeSceneProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [6, 4, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[6, 4, 6]} fov={50} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4ff" />
        
        {/* Environment */}
        <Environment preset="city" />
        
        {/* Main Model */}
        <SmartHomeModel />
      </Canvas>
    </div>
  );
}

// Hero 3D Scene with labels
export function Hero3DScene() {
  const techLabels = [
    { text: "KNX", position: "top-left" },
    { text: "LOXONE", position: "top-right" },
    { text: "24V", position: "bottom-left" },
    { text: "IoT", position: "bottom-right" },
    { text: "AUTOMATION", position: "center-top" },
    { text: "LIGHTING", position: "center-left" },
    { text: "HVAC", position: "center-right" },
    { text: "SECURITY", position: "center-bottom" },
  ];

  return (
    <div className="relative w-full h-full">
      <SmartHomeScene />
      
      {/* Tech Labels Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {techLabels.map((label, i) => (
          <motion.div
            key={label.text}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            className={`absolute text-xs font-mono text-primary/60 uppercase tracking-widest
              ${label.position === "top-left" ? "top-8 left-8" : ""}
              ${label.position === "top-right" ? "top-8 right-8" : ""}
              ${label.position === "bottom-left" ? "bottom-8 left-8" : ""}
              ${label.position === "bottom-right" ? "bottom-8 right-8" : ""}
              ${label.position === "center-top" ? "top-8 left-1/2 -translate-x-1/2" : ""}
              ${label.position === "center-left" ? "top-1/2 left-8 -translate-y-1/2" : ""}
              ${label.position === "center-right" ? "top-1/2 right-8 -translate-y-1/2" : ""}
              ${label.position === "center-bottom" ? "bottom-8 left-1/2 -translate-x-1/2" : ""}
            `}
          >
            {label.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
