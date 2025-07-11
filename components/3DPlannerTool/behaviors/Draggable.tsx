"use client";

import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { useThree } from "@react-three/fiber";
import { Mesh, Raycaster, Vector2, Vector3, Plane } from "three";
import { SNAP_VALUE } from "../config";
import { useAppDispatch } from "@/app/redux/hooks";
import {
  setSelectedId,
  setDraggingId,
  setOrbitEnabled,
} from "@/app/redux/slices/uiSlice";
import { updateBlockPosition } from "@/app/redux/slices/blocksSlice";

interface DraggableProps {
  id: number;
  selectedId: number | null;
  initialPosition: [number, number, number];
  isDragging: boolean;
  children: React.ReactNode;
}

const Draggable = forwardRef<Mesh, DraggableProps>(
  ({ id, selectedId, initialPosition, isDragging, children }, forwardedRef) => {
    const meshRef = useRef<Mesh>(null);
    useImperativeHandle(forwardedRef, () => meshRef.current!, []);

    const dispatch = useAppDispatch();
    const { gl, camera } = useThree();
    const raycaster = useRef(new Raycaster());
    const plane = useRef(new Plane(new Vector3(0, 1, 0), -0.1));
    const intersection = new Vector3();

    const dragging = useRef(false);
    const pointerStart = useRef<{ x: number; y: number } | null>(null);
    const dragThreshold = 3;

    const getRaycastPosition = (clientX: number, clientY: number) => {
      const rect = gl.domElement.getBoundingClientRect();
      const ndc = new Vector2(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1
      );

      raycaster.current.setFromCamera(ndc, camera);
      if (raycaster.current.ray.intersectPlane(plane.current, intersection)) {
        return [
          Math.round(intersection.x / SNAP_VALUE) * SNAP_VALUE,
          0.1,
          Math.round(intersection.z / SNAP_VALUE) * SNAP_VALUE,
        ] as [number, number, number];
      }
      return initialPosition;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      if (!pointerStart.current) return;

      if (!dragging.current) {
        const dx = clientX - pointerStart.current.x;
        const dy = clientY - pointerStart.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < dragThreshold) return;

        dispatch(setSelectedId(id));
        dispatch(setDraggingId(id));
        dispatch(setOrbitEnabled(false));

        dragging.current = true;
      }

      const newPos = getRaycastPosition(clientX, clientY);
      dispatch(updateBlockPosition({ id, position: newPos }));
    };

    const handlePointerUp = () => {
      if (dragging.current) {
        dispatch(setDraggingId(null));
        dispatch(setOrbitEnabled(true));
        dragging.current = false;
      }

      pointerStart.current = null;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    return (
      <group
        ref={meshRef}
        position={initialPosition}
        onPointerDown={(e) => {
          e.stopPropagation();
          dispatch(setOrbitEnabled(false));
          pointerStart.current = { x: e.clientX, y: e.clientY };
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
