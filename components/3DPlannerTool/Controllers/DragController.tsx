"use client";

import React, { useEffect } from "react";
import { SNAP_VALUE } from "../config";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { updateBlockPosition } from "@/app/redux/slices/blocksSlice";

const DragController: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector((state) => state.ui.selectedId);
  const blocks = useAppSelector((state) => state.blocks.blocks);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId === null) return;

      const block = blocks.find((b) => b.id === selectedId);
      if (!block) return;

      if (block.locked) return; // Prevent moving if locked

      const moveKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (!moveKeys.includes(e.key)) return;

      let delta: [number, number, number] = [0, 0, 0];

      if (e.shiftKey) {
        if (e.key === "ArrowUp") delta = [0, SNAP_VALUE, 0];
        else if (e.key === "ArrowDown") delta = [0, -SNAP_VALUE, 0];
        else return;
      } else {
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
        block.position[0] + delta[0],
        block.position[1] + delta[1],
        block.position[2] + delta[2],
      ];

      dispatch(updateBlockPosition({ id: selectedId, position: newPos }));
      e.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, blocks, dispatch]);

  return null;
};

export default DragController;
