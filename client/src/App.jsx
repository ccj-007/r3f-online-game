import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useAtom } from "jotai";
import { Physics } from "@react-three/rapier";
import { SocketManager } from "./components/SocketManager";
import { Suspense, useMemo } from "react";
import { KeyboardControls, SoftShadows } from "@react-three/drei";
import UI from "./components/UI";
function App() {

  const uiMap = useMemo(() => [
    { name: 'enter', keys: ['Enter'] },
  ], [])
  const map = useMemo(() => [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'back', keys: ['ArrowDown', 'KeyS'] },
    { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'right', keys: ['ArrowRight', 'KeyD'] },
    { name: 'wave', keys: ['KeyH'] },
    { name: 'jump', keys: ['Space'] },
  ], [])
  return (
    <>
      <KeyboardControls map={uiMap}>
        <UI></UI>
      </KeyboardControls>
      <KeyboardControls map={map}>
        <SocketManager />
        <Canvas shadows camera={{ position: [8, 8, 8], fov: 60 }}>
          <Suspense>
            <Physics debug>
              <color attach="background" args={["#ececec"]} />
              <SoftShadows size={42} />
              <Experience />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
