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

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "d" &&
        selectedId !== null
      ) {
        e.preventDefault();

        // Skip next undo history push if needed
        undoableRef?.current?.skipNext?.();

        // Dispatch duplication and get new block ID (assuming it returns it)
        const actionResult = await dispatch(duplicateBlockById(selectedId));
        // If your duplicateBlockById thunk returns the new block's ID as payload:
        const newBlockId = (actionResult as any).payload;

        if (newBlockId) {
          dispatch(setSelectedId(newBlockId)); // Select the duplicated block
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, dispatch, undoableRef]);

  return null;
};

export default DuplicateController;
