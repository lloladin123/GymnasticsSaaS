"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { deleteBlock } from "@/app/redux/slices/blocksSlice";
import { setSelectedId } from "@/app/redux/slices/uiSlice";

interface DeletableProps {
  id: number;
  children: React.ReactNode;
}

const Deletable: React.FC<DeletableProps> = ({ id, children }) => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector((state) => state.ui.selectedId);
  const block = useAppSelector((state) =>
    state.blocks.blocks.find((b) => b.id === id)
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "Delete" || e.key === "Backspace") &&
        selectedId === id &&
        block &&
        !block.locked // Only delete if not locked
      ) {
        dispatch(deleteBlock(id));
        dispatch(setSelectedId(null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [id, selectedId, block, dispatch]);

  return <>{children}</>;
};

export default Deletable;
