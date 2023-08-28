/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';



const Earth = ({ isMobile }) => {
  const earth = useGLTF('Arcade/arcade_scene.glb')

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='#FF69B4' color='#DAA520'/>
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
      <pointLight intensity={100} color='blue' position={[6.5, 1.5, -1.5]} angle={0.12}/>
      
      <primitive
        object={earth.scene}
        scale={isMobile ? 0.9 : 0.95}
        position={isMobile ? [40, 7, 2.2] : [5., -2.75, 1.55]}
        rotation={[0.11, .85, -0.1]}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true}}
      camera={{ position: [20, 3, 5], fov: 35 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
      
    </Canvas>
  )
}

export default EarthCanvas;