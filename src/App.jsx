import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cyl } from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

function App() {
  return (
    <>
      <Canvas camera={{ fov: 70 }}>
        <OrbitControls enableZoom={false} />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={1.25}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.5}
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      <div className="py-20">
        <h1 className="text-white bg-transparent text-7xl font-semibold text-center">
          Welcome to THREE.js
        </h1>
      </div>
    </>
  );
}

export default App;
