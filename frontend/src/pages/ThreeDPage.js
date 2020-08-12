import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "react-three-fiber"

function Element(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <octahedronBufferGeometry attach="geometry" radius={2} detail={0} />
      <meshPhysicalMaterial
        attach="material"
        color={hovered ? "skyblue" : "pink"}
        roughness={0.5}
      />
    </mesh>
  )
}

function ThreeDPage(props) {
  return (
    <Canvas
      onCreated={({ gl }) => gl.setClearColor("mistyrose")}
      style={{ height: "600px" }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Element position={[-2, 0, 0]} />
      <Element position={[0, 2, 0]} />
      <Element position={[0, 0, 0]} />
      <Element position={[0, -2, 0]} />
      <Element position={[2, 0, 0]} />
      <Element position={[-2, -2, -2]} />
      <Element position={[2, -2, -2]} />
      <Element position={[-2, 2, -2]} />
      <Element position={[2, 2, -2]} />
    </Canvas>
  )
}

export default ThreeDPage
