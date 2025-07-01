import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Mesh, Vector3 } from "three";

interface Props {
  targetRef: React.RefObject<Mesh | null>;
  onRotate: (direction: "left" | "right", amount: number) => void;
  degrees: string;
}

const RotationControls: React.FC<Props> = ({
  targetRef,
  onRotate,
  degrees,
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
      <div className="flex flex-col items-center gap-1">
        <div className="flex gap-2">
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("left", amount);
            }}
            className="px-1 py-0.5 text-xs text-white bg-gray-700 rounded shadow"
          >
            <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
              ⤻
            </span>
          </button>
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("right", amount);
            }}
            className="px-1 py-0.5 text-xs text-white bg-gray-700 rounded shadow"
          >
            ⤻
          </button>
        </div>
        <div className="text-xs text-gray-800 mt-1">{degrees}°</div>
      </div>
    </Html>
  );
};

export default RotationControls;
