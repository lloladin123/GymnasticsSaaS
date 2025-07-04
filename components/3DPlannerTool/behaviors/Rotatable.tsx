"use client";

import React, { forwardRef } from "react";
import { Mesh, Euler } from "three";
import RotationControls from "../RotationControls";

interface RotatableProps {
  rotation: [number, number, number];
  isSelected: boolean;
  isDragging: boolean;
  onRotate: (
    axis: "x" | "y" | "z",
    direction: "left" | "right",
    amount: number
  ) => void;
  children: React.ReactNode;
}

const Rotatable = forwardRef<Mesh, RotatableProps>(
  ({ rotation, isSelected, isDragging, onRotate, children }, ref) => {
    return (
      <group ref={ref} rotation={new Euler(...rotation)}>
        {children}
        {isSelected && (
          <RotationControls
            targetRef={ref as React.RefObject<Mesh>}
            rotation={rotation}
            onRotate={onRotate}
            hidden={isDragging}
          />
        )}
      </group>
    );
  }
);

export default Rotatable;
