import React, { useEffect } from "react";

interface UndoControllerProps {
  onUndo: () => void;
  onRedo: () => void;
}

const UndoController: React.FC<UndoControllerProps> = ({ onUndo, onRedo }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Undo: Ctrl/Cmd + Z (no shift)
      if (
        (e.ctrlKey || e.metaKey) &&
        !e.shiftKey &&
        e.key.toLowerCase() === "z"
      ) {
        e.preventDefault();
        onUndo();
      }
      // Redo: Ctrl/Cmd + Shift + Z
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        e.key.toLowerCase() === "z"
      ) {
        e.preventDefault();
        onRedo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onUndo, onRedo]);

  return null;
};

export default UndoController;
