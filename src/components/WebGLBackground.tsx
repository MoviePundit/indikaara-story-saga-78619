import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { MeshDistortMaterial } from '@react-three/drei';

function AbstractShape({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.2;
    mesh.current.rotation.y = time * 0.3;
    mesh.current.position.y = position[1] + Math.sin(time * 0.5) * 0.5;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.3}
        distort={0.4}
        speed={2}
        roughness={0.5}
      />
    </mesh>
  );
}

function TorusShape({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.4;
    mesh.current.rotation.z = time * 0.2;
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[2, 0.5, 16, 100]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.2}
        wireframe
      />
    </mesh>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Spread particles in a larger area
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Random colors with theme-like hues
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.6;
        colors[i * 3 + 1] = 0.3;
        colors[i * 3 + 2] = 0.9;
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.3;
        colors[i * 3 + 1] = 0.7;
        colors[i * 3 + 2] = 0.9;
      } else {
        colors[i * 3] = 0.9;
        colors[i * 3 + 1] = 0.4;
        colors[i * 3 + 2] = 0.6;
      }
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    const time = state.clock.getElapsedTime();
    const positions = points.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Create flowing wave motion
      positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.002;
      positions[i3] += Math.cos(time + positions[i3 + 1]) * 0.001;
      
      // Reset particles that go too far
      if (positions[i3 + 1] > 25) positions[i3 + 1] = -25;
      if (positions[i3 + 1] < -25) positions[i3 + 1] = 25;
      if (positions[i3] > 25) positions[i3] = -25;
      if (positions[i3] < -25) positions[i3] = 25;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export const WebGLBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a78bfa" />
        
        {/* Abstract Art Elements */}
        <AbstractShape position={[-8, 2, -5]} scale={2} color="#8b5cf6" />
        <AbstractShape position={[8, -2, -8]} scale={1.5} color="#ec4899" />
        <AbstractShape position={[0, 5, -10]} scale={1.8} color="#3b82f6" />
        <TorusShape position={[6, 0, -6]} />
        <TorusShape position={[-6, -3, -8]} />
        
        <ParticleField />
      </Canvas>
    </div>
  );
};
