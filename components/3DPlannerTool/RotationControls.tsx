"use client";

import React, { useState } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";

interface Props {
  targetRef: React.RefObject<Mesh | null>;
  onRotate: (
    axis: "x" | "y" | "z",
    direction: "left" | "right",
    amount: number
  ) => void;
  degreesX: string;
  degreesY: string;
  degreesZ: string;
  hidden?: boolean;
}

const RotationControls: React.FC<Props> = ({
  targetRef,
  onRotate,
  degreesX,
  degreesY,
  degreesZ,
  hidden,
}) => {
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const amount = Math.PI / 36;

  useFrame(() => {
    if (targetRef.current) {
      const worldPos = new Vector3();
      targetRef.current.getWorldPosition(worldPos);
      setPosition([worldPos.x, worldPos.y + 0.15, worldPos.z + 1.6]);
    }
  });

  return (
    <Html position={position} center zIndexRange={[10, 0]}>
      <div
        style={{ display: hidden ? "none" : "flex" }} // fully removes it from layout
        className="flex-col items-center gap-1 text-xs"
      >
        {/* Z-axis rotation */}
        <div className="flex gap-2 mt-1">
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("z", "left", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            ⤺ Z
          </button>
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("z", "right", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            ⤻ Z
          </button>
        </div>
        {/* Y-axis rotation */}
        <div className="flex gap-2">
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("y", "left", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            ⤺ Y
          </button>
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("y", "right", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            ⤻ Y
          </button>
        </div>

        {/* X-axis rotation */}
        <div className="flex gap-2 mt-1">
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("x", "left", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            ↶ X
          </button>
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("x", "right", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            ↷ X
          </button>
        </div>

        <div className="mt-1 text-gray-300">
          X: {degreesX}° Y: {degreesY}° Z: {degreesZ}Z
        </div>
      </div>
    </Html>
  );
};

export default RotationControls;
