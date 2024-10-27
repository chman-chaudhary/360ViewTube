import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Cyl = () => {
  const tex = useTexture("./image.png");
  const cyl = useRef(null);

  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });

  return (
    <group rotation={[-0.7, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[2.25, 2.25, 2.25, 64, 10, true]} />
        <meshBasicMaterial side={THREE.DoubleSide} map={tex} transparent />
      </mesh>
    </group>
  );
};
