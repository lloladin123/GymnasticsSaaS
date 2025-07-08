"use client";

import React, { useEffect } from "react";

interface RotationControllerProps {
  isActive: boolean; // controls whether it listens to keys
  onRotate: (
    axis: "x" | "y" | "z",
    direction: "left" | "right",
    amount: number
  ) => void;
}

const RotationController: React.FC<RotationControllerProps> = ({
  isActive,
  onRotate,
}) => {
  useEffect(() => {
    if (!isActive) return;

    const step = Math.PI / 36;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if Ctrl or Cmd is pressed so other combos (like Ctrl+D) work
      if (e.ctrlKey || e.metaKey) return;

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
      e.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onRotate]);

  return null; // no UI
};

export default RotationController;
