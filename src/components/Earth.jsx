import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")

  return (
    <primitive 
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <div className="earth">
      <Canvas
        style={{ width: '100%', height: "560px" }}
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 57,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6]
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
