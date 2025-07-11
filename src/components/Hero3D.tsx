import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#2ecc71" 
        metalness={0.7}
        roughness={0.2}
        emissive="#1a5d3a"
        emissiveIntensity={0.1}
      />
    </Sphere>
  );
};

const FloatingElements = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      boxRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      boxRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      torusRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * -2;
      torusRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.3) * 1;
    }
  });

  return (
    <>
      <Box ref={boxRef} args={[0.5, 0.5, 0.5]} position={[2, 1, -1]}>
        <meshStandardMaterial color="#27ae60" wireframe />
      </Box>
      <Torus ref={torusRef} args={[0.3, 0.1, 16, 100]} position={[-2, -1, 0]}>
        <meshStandardMaterial color="#2ecc71" />
      </Torus>
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2ecc71" />
        
        <AnimatedSphere />
        <FloatingElements />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;