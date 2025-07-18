// src/components/canvas/Computers.jsx
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); // ✅ IMPORTANT: Absolute path from public/

  return (
    <primitive
      object={computer.scene}
      scale={1.75}
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
