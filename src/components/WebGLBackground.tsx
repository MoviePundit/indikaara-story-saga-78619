import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

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
        <ParticleField />
      </Canvas>
    </div>
  );
};
