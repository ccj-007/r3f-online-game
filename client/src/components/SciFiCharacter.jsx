import React, { useRef, useEffect, useState, useMemo } from "react";
import { useGLTF, useAnimations, Text } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useFrame, useGraph, useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { socket } from "./SocketManager";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useKeyboardControls } from "@react-three/drei";
import { getRadians } from "../utils";

const MAX_HEIGHT = 0.3;

export function SciFiCharacter({ skinColor = "black", ...props }) {
  const position = useMemo(() => props.position, []);

  const group = useRef();
  const rigidBody = useRef();
  const text = useRef();
  const capsule = useRef();

  const { scene, materials, animations } = useGLTF(
    "/models/SciFiCharacter.glb"
  );
  const { actions } = useAnimations(animations, group);
  const [sub, get] = useKeyboardControls();
  const [jumplock, setJumplock] = useState(false);
  const [radians, setRadians] = useState(null);
  const [moving, setMoving] = useState(false);
  const [maxHeight, setMaxHeight] = useState(Infinity);
  const [over, setOver] = useState(false);

  const [animation, setAnimation] = useState("CharacterArmature|Idle");
  console.log("animation", actions);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  useEffect(() => {
    actions[animation].reset().fadeIn(0.32).play();
    return () => actions[animation]?.fadeOut(0.32);
  }, [animation]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  });
  useEffect(() => {
    console.log("over", over);
    if (over) {
      rigidBody.current.setGravityScale(2);
    } else {
      rigidBody.current.setGravityScale(0);
    }
  }, [over]);

  useEffect(() => {
    return sub(
      (state) => state,
      (pressedObj) => {
        if (!props.isHost) return3;

        const pressJump = get().jump;
        const pressWave = get().wave;

        const moving = Object.entries(pressedObj).some(
          (item) =>
            ["forward", "back", "left", "right"].includes(item[0]) &&
            item[1] !== false
        );
        if (moving) setMoving(true);

        if (pressWave) {
          // 打招呼
          setAnimation("CharacterArmature|Wave");
        } else if (moving && !pressJump) {
          // 控制移动
          const radians = getRadians(get());
          radians != null && setRadians(radians);
          setAnimation("CharacterArmature|Run");
        } else if (pressJump && !jumplock) {
          // 跳跃
          setJumplock(true);
        } else {
          // 静态
          setAnimation("CharacterArmature|Idle");
          setMoving(false);
        }
      }
    );
  }, []);

  useFrame((state, delta) => {
    const ownPlayerPosition = capsule.current.translation();

    capsule.current.setTranslation(props.position);
    console.log(
      "🚀 ~ file: SciFiCharacter.jsx:93 ~ useFrame ~ ownPlayerPosition:",
      capsule.current.translation(),
      rigidBody.current.translation()
    );

    const cameraPosition = state.camera.position.clone();
    cameraPosition.y = ownPlayerPosition.y + 2;

    // 文本
    text.current.lookAt(cameraPosition);
    text.current.position.set(
      ownPlayerPosition.x,
      ownPlayerPosition.y + 1,
      ownPlayerPosition.z
    );

    if (props.isHost) {
      // 设置相机位置
      // state.camera.position.set(ownPlayerPosition.x, ownPlayerPosition.y + 4, ownPlayerPosition.z)

      if (!jumplock) setMaxHeight(ownPlayerPosition.y + MAX_HEIGHT);
      if (jumplock) {
        if (ownPlayerPosition.y > maxHeight) {
          // 达到最大跳跃高度
          setOver(true);
        }
      } else {
        setOver(false);
      }
      group.current.rotation.y = radians;

      // 施加一次性的力
      if (moving || get().jump) {
        rigidBody.current.applyImpulse(
          {
            x: radians != null ? Math.sin(radians) * 0.2 : 0,
            y: jumplock && !over ? MAX_HEIGHT : 0,
            z: radians != null ? Math.cos(radians) * 0.2 : 0,
          },
          true
        );
      } else {
        rigidBody.current.applyImpulse(
          {
            x: 0,
            y: 0,
            z: 0,
          },
          true
        );
      }
    }
    socket.emit("move", [
      ownPlayerPosition.x,
      ownPlayerPosition.y,
      ownPlayerPosition.z,
    ]);
  });
  return (
    <>
      {/* player name */}
      <Text
        ref={text}
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {props.userData.username}
      </Text>
      <RigidBody
        ref={rigidBody}
        colliders={false}
        name="SciFiCharacter"
        type="dynamic"
        lockRotations
        linearDamping={6}
        gravityScale={0}
        onCollisionEnter={({ manifold, target, other }) => {
          console.log(
            "Collision at world position ",
            manifold.solverContactPoint(0)
          );
          setMaxHeight(Infinity);
          setOver(false);
          setJumplock(false);
        }}
      >
        <group ref={group} {...props} dispose={null}>
          <group name="Root_Scene">
            <group name="RootNode">
              <group
                name="CharacterArmature"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <primitive object={nodes.Root} />
              </group>
              <group
                name="SciFi_Body"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <skinnedMesh
                  name="SciFi_Body_1"
                  geometry={nodes.SciFi_Body_1.geometry}
                  material={materials.Black}
                  skeleton={nodes.SciFi_Body_1.skeleton}
                >
                  <meshStandardMaterial color={skinColor} />
                </skinnedMesh>
                <skinnedMesh
                  name="SciFi_Body_2"
                  geometry={nodes.SciFi_Body_2.geometry}
                  material={materials.LightBlue}
                  skeleton={nodes.SciFi_Body_2.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Body_3"
                  geometry={nodes.SciFi_Body_3.geometry}
                  material={materials.Skin}
                  skeleton={nodes.SciFi_Body_3.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Body_4"
                  geometry={nodes.SciFi_Body_4.geometry}
                  material={materials.Metal}
                  skeleton={nodes.SciFi_Body_4.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Body_5"
                  geometry={nodes.SciFi_Body_5.geometry}
                  material={materials.Blue}
                  skeleton={nodes.SciFi_Body_5.skeleton}
                />
              </group>
              <group
                name="SciFi_Feet"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <skinnedMesh
                  name="SciFi_Feet_1"
                  geometry={nodes.SciFi_Feet_1.geometry}
                  material={materials.Black}
                  skeleton={nodes.SciFi_Feet_1.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Feet_2"
                  geometry={nodes.SciFi_Feet_2.geometry}
                  material={materials.Metal}
                  skeleton={nodes.SciFi_Feet_2.skeleton}
                />
              </group>
              <group
                name="SciFi_Head"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <skinnedMesh
                  name="SciFi_Head_1"
                  geometry={nodes.SciFi_Head_1.geometry}
                  material={materials.Black}
                  skeleton={nodes.SciFi_Head_1.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Head_2"
                  geometry={nodes.SciFi_Head_2.geometry}
                  material={materials.Skin}
                  skeleton={nodes.SciFi_Head_2.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Head_3"
                  geometry={nodes.SciFi_Head_3.geometry}
                  material={materials.Blue}
                  skeleton={nodes.SciFi_Head_3.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Head_4"
                  geometry={nodes.SciFi_Head_4.geometry}
                  material={materials.Hair_Black}
                  skeleton={nodes.SciFi_Head_4.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Head_5"
                  geometry={nodes.SciFi_Head_5.geometry}
                  material={materials.Brown}
                  skeleton={nodes.SciFi_Head_5.skeleton}
                />
              </group>
              <group
                name="SciFi_Legs"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <skinnedMesh
                  name="SciFi_Legs_1"
                  geometry={nodes.SciFi_Legs_1.geometry}
                  material={materials.Black}
                  skeleton={nodes.SciFi_Legs_1.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Legs_2"
                  geometry={nodes.SciFi_Legs_2.geometry}
                  material={materials.LightBlue}
                  skeleton={nodes.SciFi_Legs_2.skeleton}
                />
                <skinnedMesh
                  name="SciFi_Legs_3"
                  geometry={nodes.SciFi_Legs_3.geometry}
                  material={materials.Metal}
                  skeleton={nodes.SciFi_Legs_3.skeleton}
                />
              </group>
            </group>
          </group>
        </group>
        <CapsuleCollider
          ref={capsule}
          position={[position.x, position.y + 0.94, position.z]}
          args={[0.65, 0.3]}
        ></CapsuleCollider>
      </RigidBody>
    </>
  );
}

useGLTF.preload("/models/SciFiCharacter.glb");
