"use client";

import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useThree } from "@react-three/fiber";
import { Mesh, Raycaster, Vector2, Vector3, Plane } from "three";

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
    const meshRef = useRef<Mesh>(null);
    useImperativeHandle(forwardedRef, () => meshRef.current!, []);

    const { gl, camera } = useThree();
    const raycaster = useRef(new Raycaster());
    const plane = useRef(new Plane(new Vector3(0, 1, 0), -0.1));
    const intersection = new Vector3();

    const [blockPos, setBlockPos] = useState(initialPosition);
    const dragging = useRef(false);
    const pointerStart = useRef<{ x: number; y: number } | null>(null);
    const dragThreshold = 3; // px

    const getRaycastPosition = (clientX: number, clientY: number) => {
      const rect = gl.domElement.getBoundingClientRect();
      const ndc = new Vector2(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1
      );

      raycaster.current.setFromCamera(ndc, camera);
      if (raycaster.current.ray.intersectPlane(plane.current, intersection)) {
        return [
          Math.round(intersection.x),
          0.1,
          Math.round(intersection.z),
        ] as [number, number, number];
      }
      return blockPos;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;

      if (!pointerStart.current) return;

      // Check if drag should begin
      if (!dragging.current) {
        const dx = clientX - pointerStart.current.x;
        const dy = clientY - pointerStart.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < dragThreshold) return;

        // Start drag officially
        onDragStart(id);
        setOrbitEnabled(false);
        dragging.current = true;
        console.log("🟡 Drag started after movement");
      }

      const newPos = getRaycastPosition(clientX, clientY);
      setBlockPos(newPos);
      onDrag(id, newPos);
    };

    const handlePointerUp = () => {
      if (dragging.current) {
        onDrag(id, blockPos);
        onDragEnd();
        setOrbitEnabled(true);
        dragging.current = false;
        console.log("🔴 Drag ended");
      }

      pointerStart.current = null;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    return (
      <group
        ref={meshRef}
        position={blockPos}
        onPointerDown={(e) => {
          e.stopPropagation();
          setSelectedId(id);

          // Just store the initial click, do NOT start drag yet
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
