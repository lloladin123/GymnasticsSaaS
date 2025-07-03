"use client";

import { useEffect } from "react";
import { Block as BlockType } from "../types";

interface DeletableProps {
  id: number;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
  setBlocks: React.Dispatch<React.SetStateAction<BlockType[]>>;
  children: React.ReactNode;
}

const Deletable: React.FC<DeletableProps> = ({
  id,
  selectedId,
  setSelectedId,
  setBlocks,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Delete" || e.key === "Backspace") && selectedId === id) {
        setBlocks((prev) => prev.filter((b) => b.id !== id));
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [id, selectedId, setBlocks, setSelectedId]);

  return <>{children}</>;
};

export default Deletable;
