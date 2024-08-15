"use client";
//functions
import useMousePosition from './useMousePosition';
import { easing } from 'maath'

//3d 
import * as THREE from 'three'
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState } from "react";

const Scene = () => {
  const [isPointer, setIsPointer] = useState(null)
  const model = useRef(null);
  const { x, y } = useMousePosition();

  return (
    <div className="size-full" onMouseEnter={() => { setIsPointer(true) }} onMouseLeave={() => { setIsPointer(false) }}>
      <Canvas>
        <pointLight intensity={90} position={[0, 0, 1]} />
        <pointLight intensity={30} position={[0, 0, -1]} />
        <ambientLight intensity={1} />
        <PerspectiveCamera position={[0, 0, 4]}>
          <Model isPointer={isPointer} />
        </PerspectiveCamera>
      </Canvas>
    </div>
  )

}

function Model(props) {
  const { nodes, materials } = useGLTF('/Logo.glb')
  const mesh = useRef(null);
  const { x, y } = useMousePosition();

  const [dummy] = useState(() => new THREE.Object3D())

  useFrame((state, dt) => {
    dummy.lookAt(-x / 1100, (y / 1100), 2)
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.5, dt)
  })

  return (
    <group ref={mesh} {...props} dispose={null} scale={[2.8, 2.8, 4]} rotation={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['SVGMat.001']}
        position={[0, 0, 0.004]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials['SVGMat.002']}
        position={[-0.073, 0, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials['SVGMat.003']}
        position={[0.071, 0, -0.01]}
        rotation={[Math.PI / 2, 0, 0]}
      />      <meshStandardMaterial color={"#fff"} />
    </group >
  )

}


useGLTF.preload('/Logo.glb')

export default Scene