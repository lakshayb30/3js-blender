/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ../public/model.glb 
*/

import React, { useRef } from 'react';
import { useGLTF, PerspectiveCamera, SpotLight, Environment } from '@react-three/drei';
import { Canvas , useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
export default function Model(props) {
  const { nodes, materials } = useGLTF("/model.glb");
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current){
      meshRef.current.rotation.y += 0.01;
    }
    
  });
  return (
    <group {...props}  >
      <Environment preset="city" />
      <mesh dispose={null} ref={meshRef}>
        <boxGeometry args={[1,1,1]} />

        <group
          position={[0.558, 1.014, -1.531]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.135}
          castShadow
          receiveShadow
        >
          <mesh
            geometry={nodes.Vase.geometry}
            material={materials["Flower Vase_Color"]}
            scale={2.887}
            castShadow
            receiveShadow
          />
        </group>
        <PerspectiveCamera
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={39.598}
          castShadow
          receiveShadow
          position={[-8.675, 9.546, -8.193]}
          rotation={[-2.277, -0.583, -2.569]}
        />
        <mesh
          geometry={nodes.Cube023.geometry}
          material={materials["Material.030"]}
          position={[0.324, 1.192, -0.942]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.249, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube024.geometry}
          material={materials["Material.031"]}
          position={[-0.136, 0.486, -0.942]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[-0.268, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube028.geometry}
          material={materials["Material.034"]}
          position={[-0.453, 1.335, -0.948]}
          rotation={[Math.PI, 0, Math.PI]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube029.geometry}
          material={materials["Material.035"]}
          position={[-2.563, 0.643, -0.116]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.707, 0.249, 0.249]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube016.geometry}
          material={materials["Material.036"]}
          position={[-2.573, 2.584, -0.116]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.707, 0.133, 0.249]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube021.geometry}
          material={materials["Material.013"]}
          position={[-0.114, 2.775, 1.004]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.569, 0.107, 0.2]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube030.geometry}
          material={materials["Material.014"]}
          position={[1.361, 3.04, -0.963]}
          scale={[0.257, 0.313, 0.142]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Text.geometry}
          material={materials["Material.015"]}
          position={[1.353, 3.031, -1.107]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.637, 0.694, 0.694]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          scale={[4, 0.3, 4]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
          position={[0, 0.6, 0]}
          scale={[4, 0.3, 4]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Material.002"]}
          position={[0, 0.6, -2]}
          scale={[4, 0.3, 4]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.007"]}
          position={[-3.594, 0.456, 3.5]}
          scale={[0.046, 0.91, 0.046]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.007"]}
          position={[3.406, 0.456, 3.5]}
          scale={[0.046, 0.91, 0.046]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.007"]}
          position={[2.506, 0.456, 3.5]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.046, 0.91, 0.046]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.007"]}
          position={[-2.75, 1.207, 3.614]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.05, 1, 0.05]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.007"]}
          position={[-3.7, 1.207, -0.095]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.05, 1, 0.05]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cylinder005.geometry}
          material={materials["Material.007"]}
          position={[3.521, 1.207, -0.095]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.05, 1, 0.05]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["Material.032"]}
          position={[-0.502, 1.459, 0]}
          scale={[2.026, 1, 1]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube004.geometry}
          material={materials["Material.003"]}
          position={[-0.604, 0.682, 2.947]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.707, 0.249, 0.249]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials["Material.003"]}
          position={[1.452, 0.705, -1.249]}
          scale={[0.707, 0.249, 0.249]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube006.geometry}
          material={materials["Material.003"]}
          position={[-1.516, 0.705, -1.249]}
          scale={[0.707, 0.249, 0.249]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube007.geometry}
          material={materials["Material.003"]}
          position={[2.277, 0.643, -0.116]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.707, 0.249, 0.249]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials["Material.008"]}
          position={[-1.569, 2.13, -0.961]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube009.geometry}
          material={materials["Material.009"]}
          position={[-2.225, 1.463, -0.961]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube010.geometry}
          material={materials["Material.004"]}
          position={[-1.248, 1.463, -0.961]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials["Material.005"]}
          position={[-1.569, 1.13, -0.961]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube012.geometry}
          material={materials["Material.006"]}
          position={[1.307, 1.13, -0.961]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube013.geometry}
          material={materials["Material.010"]}
          position={[1.629, 1.463, -0.961]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube014.geometry}
          material={materials["Material.011"]}
          position={[0.652, 1.463, -0.961]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube015.geometry}
          material={materials["Material.012"]}
          position={[1.307, 2.13, -0.961]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube022.geometry}
          material={materials["Material.025"]}
          position={[-0.502, 1.459, 0]}
          scale={[2.026, 1, 1]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube025.geometry}
          material={materials["Material.028"]}
          position={[-0.613, 1.192, -0.942]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.249, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube026.geometry}
          material={materials["Material.029"]}
          position={[-0.136, 2.081, -0.942]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[-0.267, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube027.geometry}
          material={materials["Material.033"]}
          position={[-0.502, 1.459, -0.217]}
          scale={[2.026, 1.188, 1]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube017.geometry}
          material={materials["Material.004"]}
          position={[-1.729, 1.463, -0.881]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube018.geometry}
          material={materials["Material.008"]}
          position={[-1.569, 1.632, -0.881]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube019.geometry}
          material={materials["Material.004"]}
          position={[1.145, 1.463, -0.881]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube020.geometry}
          material={materials["Material.008"]}
          position={[1.305, 1.632, -0.881]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={[-0.171, -0.512, -0.073]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Stool.geometry}
          material={materials.Stool}
          position={[0.555, 0.462, -1.525]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.749, 1.008, 0.749]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Old_Street_Lamp.geometry}
          material={materials["Material.037"]}
          position={[2.018, 0.362, -2.959]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.723}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Old_Street_Lamp001.geometry}
          material={materials["Material.038"]}
          position={[2.018, 0.362, -2.959]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.723}
          castShadow
          receiveShadow
        />
        <group
          position={[2.117, 0.362, -2.613]}
          rotation={[2.751, -1.506, -Math.PI]}
          scale={0.825}
          castShadow
          receiveShadow
        >
          <mesh geometry={nodes.Mesh.geometry} material={materials.DarkMetal} />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials["Leg_.."]} />
          <mesh
            geometry={nodes.Mesh_2.geometry}
            material={materials.wire_008008136}
          />
          <mesh
            geometry={nodes.Mesh_3.geometry}
            material={materials["Shine Metal"]}
          />
          <mesh geometry={nodes.Mesh_4.geometry} material={materials.Tires} />
          <mesh
            geometry={nodes.Mesh_5.geometry}
            material={materials.wire_006134113}
          />
          <mesh
            geometry={nodes.Mesh_6.geometry}
            material={materials.wire_225088199}
          />
          <mesh geometry={nodes.Mesh_7.geometry} material={materials.body} />
          <mesh geometry={nodes.Mesh_8.geometry} material={materials.Plastic} />
          <mesh
            geometry={nodes.Mesh_9.geometry}
            material={materials.wirel008136}
          />
          <mesh geometry={nodes.Mesh_10.geometry} material={materials.chain} />
        </group>
        <mesh
          geometry={nodes.WelcomeMatBase.geometry}
          material={materials.DoorMatBacking}
          position={[-0.144, 0.462, -1.341]}
          rotation={[Math.PI, 0, Math.PI]}
          castShadow
          receiveShadow
        >
          <mesh
            geometry={nodes.WelcomeMatFibers.geometry}
            material={materials.WelcomeMatFibers}
            scale={1.284}
            castShadow
            receiveShadow
          />
        </mesh>
        
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </group>
    
    
  );
}

useGLTF.preload("/model.glb");
