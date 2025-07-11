"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { updateBlockRotation } from "@/app/redux/slices/blocksSlice";

const RotationController: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const dispatch = useAppDispatch();
  const blocks = useAppSelector((state) => state.blocks.blocks);
  const selectedId = useAppSelector((state) => state.ui.selectedId);

  useEffect(() => {
    if (!isActive) return;

    const step = Math.PI / 36;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) return;

      if (selectedId === null) return;

      const block = blocks.find((b) => b.id === selectedId);
      if (!block) return;

      const rotation = [...(block.rotation || [0, 0, 0])] as [
        number,
        number,
        number,
      ];

      let updated = false;

      switch (e.key.toLowerCase()) {
        case "q":
          rotation[1] -= step;
          updated = true;
          break;
        case "e":
          rotation[1] += step;
          updated = true;
          break;
        case "a":
          rotation[2] -= step;
          updated = true;
          break;
        case "d":
          rotation[2] += step;
          updated = true;
          break;
        case "w":
          rotation[0] -= step;
          updated = true;
          break;
        case "s":
          rotation[0] += step;
          updated = true;
          break;
      }

      if (updated) {
        e.preventDefault();
        dispatch(updateBlockRotation({ id: selectedId, rotation }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, selectedId, blocks, dispatch]);

  return null;
};

export default RotationController;
