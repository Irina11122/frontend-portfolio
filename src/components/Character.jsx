import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Character() {
  const { scene, animations } = useGLTF('/avatar.glb');
  const mixerRef = useRef();

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return (
    <group position={[0, -1, 0]}>
      <mesh receiveShadow>
        <boxGeometry args={[1.2, 0.2, 1]} />
        <meshStandardMaterial color="#ccc" metalness={0.3} roughness={0.4} />
      </mesh>

      <primitive
        object={scene}
        scale={1}
        rotation={[0, -1, 0.1]}
        position={[0.2, 0.07, 0]}
      />
    </group>
  );
}
