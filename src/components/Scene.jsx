import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "./DirectionalLight";
export const Scene = ({ children }) => {
  return(
    <Canvas
    orthographic={true}
    camera={{
      up: [0, 0, 1],
      position: [300, -300, 300],
    }}
    shadows={true}
    >
      <ambientLight/>
      {children}
    </Canvas>
  )
}