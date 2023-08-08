import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Experience } from './ui/experience';

export const Hero = () => {
  return (
    <Canvas
      style={{
        height: '120%',
        position: 'absolute',
        top: 0,
      }}
      camera={{
        fov: 55,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <Suspense fallback={<>Loading...</>}>
        <Experience />
      </Suspense>
    </Canvas>
  );
};
