"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { duplicateBlockById } from "@/app/redux/slices/blocksSlice";
import { setSelectedId } from "@/app/redux/slices/uiSlice";
import { UndoableRef } from "../behaviors/Undoable";

interface DuplicateControllerProps {
  undoableRef: React.RefObject<UndoableRef> | null;
}

const DuplicateController: React.FC<DuplicateControllerProps> = ({
  undoableRef,
}) => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector((state) => state.ui.selectedId);
  const block = useAppSelector((state) =>
    state.blocks.blocks.find((b) => b.id === selectedId)
  );

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "d" &&
        selectedId !== null &&
        block &&
        !block.locked // Only allow duplicating if unlocked
      ) {
        e.preventDefault();

        undoableRef?.current?.skipNext?.();

        const actionResult = await dispatch(duplicateBlockById(selectedId));
        const newBlockId = (actionResult as any).payload;

        if (newBlockId) {
          dispatch(setSelectedId(newBlockId));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, block, dispatch, undoableRef]);

  return null;
};

export default DuplicateController;
