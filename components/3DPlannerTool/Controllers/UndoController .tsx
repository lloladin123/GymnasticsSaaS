"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "@/app/redux/hooks";
import { undo, redo } from "@/app/redux/slices/undoSlice"; // adjust imports to your actual undo/redo actions

// TO DOO Undoing undos two actions when duplicating.

const UndoController: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        !e.shiftKey &&
        e.key.toLowerCase() === "z"
      ) {
        e.preventDefault();
        dispatch(undo());
      }
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        e.key.toLowerCase() === "z"
      ) {
        e.preventDefault();
        dispatch(redo());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dispatch]);

  return null;
};

export default UndoController;
