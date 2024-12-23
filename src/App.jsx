import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import Model from "./Model.jsx"
import * as THREE from 'three';



const App = () => {
  return (
    <Canvas 
    camera={{ position: [0, 5, 10], fov: 60 }} 
    background="#ff0000"
    shadows
    gl={{ outputEncoding: THREE.sRGBEncoding, toneMapping: THREE.ACESFilmicToneMapping }}
    
    >
      <OrbitControls
        minDistance={5}
        maxDistance={15}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        minAzimuthAngle={Math.PI /8}
        maxAzimuthAngle={-Math.PI /2}
      />
      <Model  background="#ff0000" />
      
    </Canvas>
  );
};

export default App;

