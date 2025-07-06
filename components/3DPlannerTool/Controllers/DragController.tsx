"use client";

import React, { useEffect } from "react";

interface DragControllerProps {
  selectedId: number | null;
  onMove: (id: number, delta: [number, number, number]) => void;
  getPosition: (id: number) => [number, number, number] | undefined;
}

const DragController: React.FC<DragControllerProps> = ({
  selectedId,
  onMove,
  getPosition,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedId) return;

      const moveKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (!moveKeys.includes(e.key)) return;

      e.preventDefault();

      const delta: [number, number, number] = [0, 0, 0];

      switch (e.key) {
        case "ArrowUp":
          delta[2] = -1;
          break;
        case "ArrowDown":
          delta[2] = 1;
          break;
        case "ArrowLeft":
          delta[0] = -1;
          break;
        case "ArrowRight":
          delta[0] = 1;
          break;
      }

      const pos = getPosition(selectedId);
      if (!pos) return;

      const newPos: [number, number, number] = [
        pos[0] + delta[0],
        pos[1],
        pos[2] + delta[2],
      ];

      onMove(selectedId, newPos);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, onMove, getPosition]);

  return null; // no UI
};

export default DragController;
