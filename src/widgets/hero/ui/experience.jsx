import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
} from '@react-three/drei';
import React from 'react';
import { HomeScreen } from './homeScreen';

export const Experience = () => {
  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf',
  );

  return (
    <>
      <PresentationControls
        global
        rotation={[0, -0.4, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-0.5, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={165}
          color={'#925924'}
          rotation={[0.1, -Math.PI / 2, 0]}
          position={[-3, 0.25, 0]}
        />
        <ambientLight />
        <Float rotationIntensity={0.25} rotation-y={-1}>
          <primitive object={computer.scene} position={[0.5, -1.2, -1.5]}>
            <Html transform distanceFactor={5} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
              <HomeScreen />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={10} blur={2.4} />
    </>
  );
};
