import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function DistortedOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1.6, 96, 96]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#7c3aed"
          emissiveIntensity={0.4}
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.85}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });
  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Torus args={[0.35, 0.08, 32, 64]} position={[2.6, 0.8, -0.5]}>
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.6} roughness={0.2} metalness={0.9} />
        </Torus>
      </Float>
      <Float speed={1.6} rotationIntensity={1.4} floatIntensity={1.5}>
        <Icosahedron args={[0.4, 0]} position={[-2.8, -0.4, 0.5]}>
          <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} wireframe />
        </Icosahedron>
      </Float>
      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={2}>
        <mesh position={[2.2, -1.2, 0.8]}>
          <octahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.7} roughness={0.1} metalness={0.95} />
        </mesh>
      </Float>
    </group>
  );
}

interface HeroSceneProps {
  className?: string;
}

const HeroScene = ({ className }: HeroSceneProps) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-10, -8, -5]} intensity={1} color="#a855f7" />
        <pointLight position={[0, 5, 5]} intensity={0.6} color="#ec4899" />
        <Stars radius={60} depth={40} count={2500} factor={3} saturation={0} fade speed={0.6} />
        <DistortedOrb />
        <OrbitingShapes />
      </Canvas>
    </div>
  );
};

export default HeroScene;
