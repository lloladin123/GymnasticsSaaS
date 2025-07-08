"use client";

import React, { useEffect } from "react";

interface DuplicateControllerProps {
  selectedId: number | null;
  onDuplicate: (id: number) => void;
}

const DuplicateController: React.FC<DuplicateControllerProps> = ({
  selectedId,
  onDuplicate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "d" &&
        selectedId !== null
      ) {
        e.preventDefault();
        onDuplicate(selectedId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId, onDuplicate]);

  return null;
};

export default DuplicateController;
