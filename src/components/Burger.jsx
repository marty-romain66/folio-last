/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/burger.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/burger.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.burger_top_bun.geometry} material={materials.burger_bun_top} position={[0, 4.5, 0]} />
      <mesh geometry={nodes.burger_bot_bun.geometry} material={materials.burger_bun_bottom} position={[0.04, 0.22, -0.02]} />
      <mesh geometry={nodes.burger_patty.geometry} material={materials.burger_patty} position={[0.04, 0.83, -0.02]} />
      <mesh geometry={nodes.cheese_1.geometry} material={materials.cheeze} position={[0, 1.73, 0]} />
      <mesh geometry={nodes.cheese_2.geometry} material={materials.cheeze} position={[0, 1.88, 0]} rotation={[-0.02, 0.63, 0.04]} />
      <mesh geometry={nodes.cheese_3.geometry} material={materials.cheeze} position={[0.14, 1.78, -0.02]} rotation={[0, 0.78, 0]} scale={1.37} />
      <mesh geometry={nodes.Made20bacon.geometry} material={materials.Made20bacon} position={[-0.49, 1.65, 0.14]} rotation={[2.95, 1.43, -3.01]} />
      <mesh geometry={nodes.Made20bacon003.geometry} material={materials.Made20bacon} position={[0.43, 1.65, -0.44]} rotation={[0.11, -1.32, 0.05]} />
      <mesh geometry={nodes.Made20bacon004.geometry} material={materials.Made20bacon} position={[-0.02, 1.72, -0.17]} rotation={[0.03, 0.32, -0.06]} />
      <group position={[0.09, 1.62, -1.04]} rotation={[-0.03, 0.01, 0.05]} scale={[1.28, 1, 1.28]}>
        <mesh geometry={nodes.tomato_1.geometry} material={materials.tomato} />
        <mesh geometry={nodes.tomato_2.geometry} material={materials.sides} />
      </group>
      <mesh geometry={nodes['fresh-lettuce-one-leaf-isolated'].geometry} material={materials['fresh-lettuce-one-leaf-isolated']} position={[-0.6, 0.44, 0.28]} rotation={[Math.PI / 2, 1.55, Math.PI / 2]} scale={3.13} />
      <mesh geometry={nodes['fresh-lettuce-one-leaf-isolated001'].geometry} material={materials['fresh-lettuce-one-leaf-isolated']} position={[0.36, 1.6, 0.02]} rotation={[-2.21, -1.51, 0.93]} scale={3.13} />
      <mesh geometry={nodes['fresh-lettuce-one-leaf-isolated002'].geometry} material={materials['fresh-lettuce-one-leaf-isolated']} position={[0.63, 0.44, 0.02]} rotation={[Math.PI / 2, -1.55, -Math.PI / 2]} scale={3.13} />
      <mesh geometry={nodes['fresh-lettuce-one-leaf-isolated003'].geometry} material={materials['fresh-lettuce-one-leaf-isolated']} position={[0.26, 0.43, 0.77]} rotation={[0.02, 0.79, 3.12]} scale={3.13} />
      <mesh geometry={nodes['fresh-lettuce-one-leaf-isolated004'].geometry} material={materials['fresh-lettuce-one-leaf-isolated']} position={[-0.1, 0.44, -0.65]} rotation={[Math.PI / 2, -1.55, -Math.PI / 2]} scale={3.13} />
      <mesh geometry={nodes['fresh-lettuce-one-leaf-isolated005'].geometry} material={materials['fresh-lettuce-one-leaf-isolated']} position={[-0.4, 1.6, 0.27]} rotation={[-3.05, 1.02, -0.08]} scale={3.13} />
      <mesh geometry={nodes['fresh-lettuce-one-leaf-isolated006'].geometry} material={materials['fresh-lettuce-one-leaf-isolated']} position={[-0.28, 1.88, -0.45]} rotation={[-0.04, -0.25, 0.08]} scale={3.13} />
    </group>
  )
}

useGLTF.preload('/burger.glb')