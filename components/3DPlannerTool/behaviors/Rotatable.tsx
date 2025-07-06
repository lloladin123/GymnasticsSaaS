"use client";

import React, { forwardRef, useEffect } from "react";
import { Mesh, Euler } from "three";

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
    useEffect(() => {
      if (!isSelected) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        const step = Math.PI / 36;

        switch (e.key.toLowerCase()) {
          case "q":
            onRotate("y", "left", step);
            break;
          case "e":
            onRotate("y", "right", step);
            break;
          case "a":
            onRotate("z", "left", step);
            break;
          case "d":
            onRotate("z", "right", step);
            break;
          case "w":
            onRotate("x", "left", step);
            break;
          case "s":
            onRotate("x", "right", step);
            break;
          default:
            return;
        }

        e.preventDefault(); // Prevents scrolling or other default behavior
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isSelected, onRotate]);

    return (
      <group ref={ref} rotation={new Euler(...rotation)}>
        {children}
      </group>
    );
  }
);

export default Rotatable;
