"use client";

import React from "react";
import * as THREE from "three";

interface RectangularBlockFoamProps {
  isSelected: boolean;
  selectionColor: string;
  size?: [number, number, number]; // absolute size: [width, height, depth]
}

// Default materials for box faces
const defaultMaterials = [
  new THREE.MeshBasicMaterial({ color: "blue" }), // right
  new THREE.MeshBasicMaterial({ color: "#00aaff" }), // left
  new THREE.MeshBasicMaterial({ color: "blue" }), // top
  new THREE.MeshBasicMaterial({ color: "#00aaff" }), // bottom
  new THREE.MeshBasicMaterial({ color: "red" }), // front
  new THREE.MeshBasicMaterial({ color: "#00aaff" }), // back
];

const RectangularBlockFoam: React.FC<RectangularBlockFoamProps> = ({
  isSelected,
  selectionColor,
  size = [1.3, 0.9, 0.7], // default absolute size
}) => {
  const materials = isSelected
    ? defaultMaterials.map(
        () => new THREE.MeshBasicMaterial({ color: selectionColor })
      )
    : defaultMaterials;

  return (
    <mesh material={materials}>
      <boxGeometry args={size} />
    </mesh>
  );
};

export default RectangularBlockFoam;
