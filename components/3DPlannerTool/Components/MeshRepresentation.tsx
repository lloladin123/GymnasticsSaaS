"use client";

import React from "react";
import { Text } from "@react-three/drei";

interface Props {
  type: string;
  isSelected: boolean;
}

const MeshRepresentation: React.FC<Props> = ({ type, isSelected }) => {
  // Basic type-switching logic, can be extended with more block types
  switch (type) {
    case "airtrack":
    default:
      return (
        <>
          <mesh castShadow>
            <boxGeometry args={[4, 0.2, 1]} />
            <meshStandardMaterial
              color="skyblue"
              emissive={isSelected ? "orange" : "black"}
              emissiveIntensity={1.5}
            />
          </mesh>
          <mesh position={[0, 0.11, 0]}>
            <boxGeometry args={[4, 0.01, 0.05]} />
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
