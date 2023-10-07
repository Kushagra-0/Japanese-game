import { OrbitControls, Cylinder, MeshReflectorMaterial, Text3D } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Tori } from "./Tori";
import { kanas } from "../constants";
import { useGameStore } from "../store";
import { KanaSpots } from "./KanaSpots";
import { useEffect } from "react";
import { CharacterController } from "./CharacterController";

export const Experience = () => {

  const startGame = useGameStore((state) => state.startGame);

  useEffect(() => {
    startGame();
  }, []);

  return (
    <>
      <OrbitControls />

      {/* LIGHTS */}

      <ambientLight intensity={1} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={0.8}
        castShadow
        color={"#9e69da"}
      />

      {/* BACKGROUND */}

      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[400, 400]}
          resolution={1024}
          mixBlur={1}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="#dbecfb"
          metalness={0.6}
          roughness={1}
        />
      </mesh>

      <Tori
        scale={[16, 16, 16]}
        position={[0, 0, -22]}
        rotation-y={1.25 * Math.PI}
      />
      <Tori
        scale={[10, 10, 10]}
        position={[-8, 0, -20]}
        rotation-y={1.4 * Math.PI}
      />
      <Tori 
        scale={[10, 10, 10]}
        position={[8, 0, -20]} 
        rotation-y={Math.PI} 
      />

      {/* STAGE */}

      <group position-y={-1}>
      <RigidBody colliders={false} type="fixed" position-y={-0.5}>
        <CylinderCollider args={[1/2, 5]} />
        <Cylinder scale={[5, 1, 5]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Cylinder>
      </RigidBody>

      {/* CHARACTER */}
      
      <CharacterController/>

      {/* KANA */}

      <KanaSpots />

      </group>
    </>
  );
};