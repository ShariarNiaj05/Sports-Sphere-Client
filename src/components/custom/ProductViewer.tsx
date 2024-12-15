import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
const ProductViewer = ({ isActive }) => {
  return (
    <div
      className={`w-full aspect-square transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Stage environment="studio" intensity={0.5}>
          {/* Using a basic mesh as placeholder */}
          <mesh>
            <boxGeometry args={[2, 0.5, 1]} />
            <meshStandardMaterial color="navy" />
          </mesh>
        </Stage>
        <OrbitControls
          enableZoom={false}
          autoRotate={isActive}
          autoRotateSpeed={4}
        />
      </Canvas>
    </div>
  );
};

export default ProductViewer;
