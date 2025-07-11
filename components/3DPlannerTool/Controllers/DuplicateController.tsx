"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { duplicateBlockById } from "@/app/redux/slices/blocksSlice";
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "d" &&
        selectedId !== null
      ) {
        e.preventDefault();

        // Call skipNext only if undoableRef and method exist
        undoableRef?.current?.skipNext?.();

        dispatch(duplicateBlockById(selectedId));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, dispatch, undoableRef]);

  return null;
};

export default DuplicateController;
