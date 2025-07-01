import React, { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Mesh, Euler } from "three";
import { Text } from "@react-three/drei";
import RotationControls from "./RotationControls";

interface Props {
  id: number;
  position: [number, number, number];
  rotation?: [number, number, number];
  isDragging: boolean;
  isSelected: boolean;
  onDragStart: (id: number) => void;
  onDragEnd: () => void;
  onDrag: (id: number, newPos: [number, number, number]) => void;
  onRotate: (id: number, direction: "left" | "right", amount: number) => void;
  setSelectedId: (id: number) => void;
  setOrbitEnabled: (enabled: boolean) => void;
}

const DraggableBlock: React.FC<Props> = ({
  id,
  position,
  rotation = [0, 0, 0],
  isDragging,
  isSelected,
  onDragStart,
  onDragEnd,
  onDrag,
  onRotate,
  setSelectedId,
  setOrbitEnabled,
}) => {
  const [pointerDownPos, setPointerDownPos] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [didDrag, setDidDrag] = useState(false);
  const ref = useRef<Mesh | null>(null);
  const [blockPos, setBlockPos] = useState(position);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (isDragging) {
      const x = (mouse.x * viewport.width) / 2;
      const z = (-mouse.y * viewport.height) / 2;
      const snappedX = Math.round(x);
      const snappedZ = Math.round(z);
      const newPos: [number, number, number] = [snappedX, 0.1, snappedZ];
      setBlockPos(newPos);
      onDrag(id, newPos);
    }
  });

  const handleRotate = (direction: "left" | "right", amount: number) => {
    onRotate(id, direction, amount);
  };

  const degrees = ((rotation[1] * 180) / Math.PI).toFixed(1);

  return (
    <>
      <group
        ref={ref}
        position={blockPos}
        rotation={new Euler(...rotation)}
        onPointerDown={(e) => {
          e.stopPropagation();
          setPointerDownPos({ x: e.clientX, y: e.clientY });
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          if (didDrag) {
            onDragEnd();
            setDidDrag(false);
            setOrbitEnabled(true);
            return;
          }
          if (pointerDownPos) {
            setPointerDownPos(null);
            setSelectedId(id);
          }
        }}
        onPointerMove={(e) => {
          if (!pointerDownPos || isDragging) return;
          const dx = Math.abs(e.clientX - pointerDownPos.x);
          const dy = Math.abs(e.clientY - pointerDownPos.y);
          if (dx > 2 || dy > 2) {
            onDragStart(id);
            setDidDrag(true);
            setPointerDownPos(null);
            setOrbitEnabled(false);
          }
        }}
      >
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
      </group>

      {isSelected && (
        <RotationControls
          targetRef={ref}
          onRotate={handleRotate}
          degrees={degrees}
        />
      )}
    </>
  );
};

export default DraggableBlock;
