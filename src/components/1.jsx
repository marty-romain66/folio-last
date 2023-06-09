/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/1.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/1.glb')
  return (
    
    <group {...props} dispose={null}>
      <mesh geometry={nodes.node_id5.geometry} material={materials['74']} position={[0.01, 0.04, 0.33]} rotation={[0.86, 1.09, 0.83]} scale={0.05} />
    </group>
  )
}

useGLTF.preload('/1.glb')
