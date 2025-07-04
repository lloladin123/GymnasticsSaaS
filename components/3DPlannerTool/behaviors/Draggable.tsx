"use client";

import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useThree } from "@react-three/fiber";
import { Mesh } from "three";

interface DraggableProps {
  id: number;
  initialPosition: [number, number, number];
  isDragging: boolean;
  onDragStart: (id: number) => void;
  onDragEnd: () => void;
  onDrag: (id: number, newPos: [number, number, number]) => void;
  setSelectedId: (id: number | null) => void;
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
    const pointerDownRef = useRef<{ x: number; y: number } | null>(null);
    const [didDrag, setDidDrag] = useState(false);
    const [blockPos, setBlockPos] = useState(initialPosition);

    const { gl, viewport } = useThree();

    const getCanvasRelativePosition = (e: PointerEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      const xNdc = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const yNdc = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const x = (xNdc * viewport.width) / 2;
      const z = (-yNdc * viewport.height) / 2;

      return [Math.round(x), 0.1, Math.round(z)] as [number, number, number];
    };

    useImperativeHandle(forwardedRef, () => localRef.current!, []);

    const handlePointerMove = (e: PointerEvent) => {
      if (!pointerDownRef.current) return;

      const dx = Math.abs(e.clientX - pointerDownRef.current.x);
      const dy = Math.abs(e.clientY - pointerDownRef.current.y);

      if (!didDrag && (dx > 2 || dy > 2)) {
        onDragStart(id);
        setDidDrag(true);
        setOrbitEnabled(false);
      }

      if (didDrag) {
        const newPos = getCanvasRelativePosition(e);
        setBlockPos(newPos);
        onDrag(id, newPos);
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (didDrag) {
        onDrag(id, blockPos);
        onDragEnd();
        setDidDrag(false);
        setOrbitEnabled(true);
      }
      pointerDownRef.current = null;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    return (
      <group
        ref={localRef}
        position={blockPos}
        onPointerDown={(e) => {
          e.stopPropagation();
          pointerDownRef.current = { x: e.clientX, y: e.clientY };
          setSelectedId(id);

          window.addEventListener("pointermove", handlePointerMove);
          window.addEventListener("pointerup", handlePointerUp);
        }}
      >
        {children}
      </group>
    );
  }
);

export default Draggable;
