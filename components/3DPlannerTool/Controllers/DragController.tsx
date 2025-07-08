"use client";

import React, { useEffect } from "react";
import { SNAP_VALUE } from "../config";

interface DragControllerProps {
  selectedId: number | null;
  onMove: (id: number, newPos: [number, number, number]) => void;
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

      const pos = getPosition(selectedId);
      if (!pos) return;

      // Default delta for X and Z
      let delta: [number, number, number] = [0, 0, 0];

      if (e.shiftKey) {
        // Move up/down on Y axis when Shift + Up/Down
        if (e.key === "ArrowUp") delta = [0, SNAP_VALUE, 0];
        else if (e.key === "ArrowDown") delta = [0, -SNAP_VALUE, 0];
        else return; // Ignore left/right with shift
      } else {
        // Move on X/Z plane
        switch (e.key) {
          case "ArrowUp":
            delta = [0, 0, -SNAP_VALUE];
            break;
          case "ArrowDown":
            delta = [0, 0, SNAP_VALUE];
            break;
          case "ArrowLeft":
            delta = [-SNAP_VALUE, 0, 0];
            break;
          case "ArrowRight":
            delta = [SNAP_VALUE, 0, 0];
            break;
        }
      }

      const newPos: [number, number, number] = [
        pos[0] + delta[0],
        pos[1] + delta[1],
        pos[2] + delta[2],
      ];

      onMove(selectedId, newPos);
      e.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, onMove, getPosition]);

  return null;
};

export default DragController;
