"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, MeshWobbleMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrbs() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.2, 64, 64]} position={[2, 1, -2]}>
          <MeshDistortMaterial
            color="#22d3ee"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#0891b2"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[0.8, 64, 64]} position={[-3, -1, -1]}>
          <MeshWobbleMaterial
            color="#a78bfa"
            speed={2}
            factor={0.6}
            emissive="#7c3aed"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </Float>
    </>
  );
}

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#ec4899"
          wireframe
          transparent
          opacity={0.2}
          emissive="#ec4899"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

const HeroScene = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a78bfa" />
        <spotLight position={[0, 5, 0]} intensity={0.8} color="#ec4899" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingOrbs />
        <CentralCore />
      </Canvas>
    </div>
  );
};

export default HeroScene;