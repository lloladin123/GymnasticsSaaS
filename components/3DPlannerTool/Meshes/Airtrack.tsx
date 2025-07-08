"use client";

import React from "react";

interface AirtrackProps {
  isSelected: boolean;
  selectionColor: string;
}

const Airtrack: React.FC<AirtrackProps> = ({ isSelected, selectionColor }) => {
  return (
    <>
      <mesh>
        <boxGeometry args={[15, 0.3, 2]} />
        <meshBasicMaterial color={isSelected ? selectionColor : "black"} />
      </mesh>
      <mesh position={[0, 0.16, 0]}>
        <boxGeometry args={[15, 0.01, 0.05]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </>
  );
};

export default Airtrack;
