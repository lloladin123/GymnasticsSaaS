// behaviors/Draggable.tsx
"use client";

import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";

interface DraggableProps {
  id: number;
  initialPosition: [number, number, number];
  isDragging: boolean;
  onDragStart: (id: number) => void;
  onDragEnd: () => void;
  onDrag: (id: number, newPos: [number, number, number]) => void;
  setSelectedId: (id: number) => void;
  setOrbitEnabled: (enabled: boolean) => void;
  children: React.ReactNode;
}

const Draggable = forwardRef<Mesh, DraggableProps>(
  (
    {
      id,
      initialPosition,
      isDragging,
      onDragStart,
      onDragEnd,
      onDrag,
      setSelectedId,
      setOrbitEnabled,
      children,
    },
    forwardedRef
  ) => {
    const localRef = useRef<Mesh>(null);
    useImperativeHandle(forwardedRef, () => localRef.current!, []);

    const [blockPos, setBlockPos] = useState(initialPosition);
    const [pointerDownPos, setPointerDownPos] = useState<{
      x: number;
      y: number;
    } | null>(null);
    const [didDrag, setDidDrag] = useState(false);
    const { mouse, viewport } = useThree();

    useFrame(() => {
      if (isDragging) {
        const x = (mouse.x * viewport.width) / 2;
        const z = (-mouse.y * viewport.height) / 2;
        const newPos: [number, number, number] = [
          Math.round(x),
          0.1,
          Math.round(z),
        ];
        setBlockPos(newPos);
        onDrag(id, newPos);
      }
    });

    return (
      <group
        ref={localRef}
        position={blockPos}
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
        {children}
      </group>
    );
  }
);

export default Draggable;
