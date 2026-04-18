"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, MeshWobbleMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, 8), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

function FloatingOrbs() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.2, 64, 64]} position={[3, 1, -2]}>
          <MeshDistortMaterial
            color="#22d3ee"
            speed={4}
            distort={0.5}
            radius={1}
            emissive="#0891b2"
            emissiveIntensity={0.8}
          />
        </Sphere>
      </Float>
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[0.8, 64, 64]} position={[-4, -2, -1]}>
          <MeshWobbleMaterial
            color="#a78bfa"
            speed={3}
            factor={0.8}
            emissive="#7c3aed"
            emissiveIntensity={0.6}
          />
        </Sphere>
      </Float>
      <Float speed={4} rotationIntensity={0.5} floatIntensity={3}>
        <Sphere args={[0.4, 32, 32]} position={[0, 3, -3]}>
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={1}
            roughness={0}
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
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshStandardMaterial
          color="#ec4899"
          wireframe
          transparent
          opacity={0.15}
          emissive="#ec4899"
          emissiveIntensity={0.4}
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
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#a78bfa" />
        <spotLight position={[0, 10, 0]} intensity={1} color="#ec4899" />
        
        <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />
        <FloatingOrbs />
        <CentralCore />
        <Rig />
      </Canvas>
    </div>
  );
};

export default HeroScene;