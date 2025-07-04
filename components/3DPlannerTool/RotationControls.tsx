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
  rotation: [number, number, number];
  hidden?: boolean;
}

const RotationControls: React.FC<Props> = ({
  targetRef,
  onRotate,
  rotation,
  hidden,
}) => {
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const amount = Math.PI / 36;

  const [x, y, z] = rotation;
  const degreesX = ((x * 180) / Math.PI).toFixed(1);
  const degreesY = ((y * 180) / Math.PI).toFixed(1);
  const degreesZ = ((z * 180) / Math.PI).toFixed(1);

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
        style={{ display: hidden ? "none" : "flex" }}
        className="flex-col items-center gap-1 text-xs"
      >
        {/* Z-axis */}
        <div className="flex gap-2 mt-1">
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("z", "left", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            <span className="inline-block -rotate-90">↷</span> Z
          </button>
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("z", "right", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            <span className="inline-block rotate-90">↶</span> Z
          </button>
        </div>

        {/* Y-axis */}
        <div className="flex gap-2">
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("y", "left", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            <span className="inline-block scale-x-[-1]">⤻</span> Y
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

        {/* X-axis */}
        <div className="flex gap-2 mt-1">
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("x", "left", amount);
            }}
            className="px-1 py-0.5 bg-gray-700 text-white rounded"
          >
            <span className="inline-block rotate-180">↷</span> X
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

        {/* Rotation display */}
        <div className="flex flex-col bg-gray-400 p-2 rounded-xl mt-1 text-xs text-gray-300">
          <div className="flex gap-2 items-center justify-center w-full">
            <span className="font-semibold text-white">X:</span> {degreesX}°
            <span className="font-semibold text-white">Y:</span> {degreesY}°
            <span className="font-semibold text-white">Z:</span> {degreesZ}°
          </div>
        </div>
      </div>
    </Html>
  );
};

export default RotationControls;
