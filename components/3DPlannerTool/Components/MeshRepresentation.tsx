"use client";

import React from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface Props {
  type: string;
  isSelected: boolean;
}

const MeshRepresentation: React.FC<Props> = ({ type, isSelected }) => {
  switch (type) {
    case "skumplint":
      // Array of materials, one per face:
      // order: +x, -x, +y, -y, +z, -z
      const materials = [
        new THREE.MeshStandardMaterial({ color: "red" }), // right
        new THREE.MeshStandardMaterial({ color: "green" }), // left
        new THREE.MeshStandardMaterial({ color: "blue" }), // top
        new THREE.MeshStandardMaterial({ color: "yellow" }), // bottom
        new THREE.MeshStandardMaterial({ color: "purple" }), // front
        new THREE.MeshStandardMaterial({ color: "orange" }), // back
      ];

      return (
        <>
          <mesh castShadow material={materials}>
            <boxGeometry args={[1.3, 0.9, 0.7]} />
          </mesh>
          {isSelected && (
            <Text
              position={[0, 2, 0]}
              fontSize={0.5}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              Skumplint
            </Text>
          )}
        </>
      );

    case "airtrack":
    default:
      return (
        <>
          <mesh castShadow>
            <boxGeometry args={[15, 0.3, 2]} />
            <meshStandardMaterial
              color="black"
              emissive={isSelected ? "orange" : "black"}
              emissiveIntensity={1.5}
            />
          </mesh>
          <mesh position={[0, 0.16, 0]}>
            <boxGeometry args={[15, 0.01, 0.05]} />
            <meshStandardMaterial color="white" />
          </mesh>

          {isSelected && (
            <Text
              position={[0, 0.3, 0]}
              fontSize={0.4}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              Airtrack
            </Text>
          )}
        </>
      );
  }
};

export default MeshRepresentation;
