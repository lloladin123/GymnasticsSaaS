"use client";

import React from "react";

interface AirtrackProps {
  isSelected: boolean;
  selectionColor: string;
  size?: [number, number, number]; // absolute size: [length, height, depth]
}

const Airtrack: React.FC<AirtrackProps> = ({
  isSelected,
  selectionColor,
  size = [15, 0.3, 2], // default absolute size
}) => {
  return (
    <>
      <mesh>
        <boxGeometry args={size} />
        <meshBasicMaterial color={isSelected ? selectionColor : "black"} />
      </mesh>
      <mesh position={[0, size[1] / 2 + 0.01, 0]}>
        {/* Adjust second mesh size to be thin and long */}
        <boxGeometry args={[size[0], 0.01, 0.05]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </>
  );
};

export default Airtrack;
