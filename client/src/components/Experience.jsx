import {
  ContactShadows,
  Environment,
  FirstPersonControls,
  OrbitControls,
  useCursor,
} from "@react-three/drei";
import { SciFiCharacter } from './SciFiCharacter'
import { StreetScene } from "./streetScene";
import { charactersAtom, socket } from "./SocketManager";
import { useAtom } from "jotai";
import * as THREE from "three";
import { useState } from "react";
import { RigidBody } from "@react-three/rapier";

export const Experience = () => {
  const [characters] = useAtom(charactersAtom);
  const [onFloor, setOnFloor] = useState(false);
  useCursor(onFloor);
  console.log('characters', characters)
  return (
    < >
      <directionalLight
        position={[25, 18, -25]}
        intensity={1.3}
        castShadow
        shadow-camera-near={0}
        shadow-camera-far={80}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-bias={-0.0001}
      />
      <Environment preset="sunset"></Environment>
      <ambientLight intensity={0.3}></ambientLight>
      <ContactShadows blur={3}></ContactShadows>
      {/* <FirstPersonControls lookSpeed={0.1} /> */}
      <OrbitControls></OrbitControls>

      {/* 场景 */}
      <RigidBody type="fixed" colliders="trimesh">
        <StreetScene
          onPointerEnter={() => setOnFloor(true)}
          onPointerLeave={() => setOnFloor(false)}></StreetScene>
      </RigidBody>

      {/* 角色 */}
      {characters.map((character) => (
        <>
          <SciFiCharacter
            key={character.id}
            position={
              new THREE.Vector3(
                character.position[0],
                character.position[1],
                character.position[2]
              )
            }
            userData={character.userData}
            skinColor={character.userData.skinColor}
            isHost={socket.id === character.id}
          /></>
      ))}
    </>
  );
};
