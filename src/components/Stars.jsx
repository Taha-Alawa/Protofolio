import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(15000), { radius: 1.2 })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 25;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial 
          transparent
          color="#f272c8"
          size={0.0016}
          sizeAttenuation={true}
          depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = ({ check }) => {
  return (
    <div className="stars">
      <Canvas
        camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null} />
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas