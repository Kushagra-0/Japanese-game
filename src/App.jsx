import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { generateGameLevel } from "./store";

function App() {

  return (
    <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
      <color attach="background" args={["#dbecfb"]} />
      <fog attach="fog" args={["#dbecfb", 30, 40]} />
      <Suspense>
        <Physics debug>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default App;