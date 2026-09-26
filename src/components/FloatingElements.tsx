
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({ 
  position, 
  color, 
  shape 
}: { 
  position: [number, number, number]; 
  color: string; 
  shape: "sphere" | "box" | "torus" 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  if (shape === "sphere") {
    return (
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} position={position}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={color} transparent opacity={0.8} />
        </mesh>
      </Float>
    );
  } else if (shape === "box") {
    return (
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} position={position}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color={color} transparent opacity={0.8} />
        </mesh>
      </Float>
    );
  } else {
    return (
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} position={position}>
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
          <meshStandardMaterial color={color} transparent opacity={0.8} />
        </mesh>
      </Float>
    );
  }
};

const FloatingElements = () => {
  return (
    <Canvas className="absolute inset-0 -z-20">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingShape position={[-3, 2, 0]} color="#3b82f6" shape="sphere" />
      <FloatingShape position={[3, -1, 0]} color="#6366f1" shape="box" />
      <FloatingShape position={[0, 3, -2]} color="#8b5cf6" shape="torus" />
      <FloatingShape position={[-2, -2, 1]} color="#06b6d4" shape="sphere" />
    </Canvas>
  );
};

export default FloatingElements;
