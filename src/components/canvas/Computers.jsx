/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("gaming_desktop_pc/gaming_pc.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor='#FF69B4' color='#FF69B4'/>
      <spotLight
        position={[-20, 40, 10]}
        angle={0.12}
        
        intensity={10}
        castShadow
        shadow-mapSize={1024}
        
      />
      <spotLight
        position={[20, 50, -50]}
        angle={0.22}
        
        intensity={10}
        castShadow
        shadow-mapSize={1024}
        
      />
      <pointLight intensity={30} color='blue' position={[6.5, 1.5, -1.5]} angle={0.12}/>
      <pointLight intensity={30} color='blue' position={[6, 1.5, -1]} angle={-0.22}/>
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [40, 7, 2.2] : [5.25, -2.55, -2.95]}
        rotation={[-0.01, -.85, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;