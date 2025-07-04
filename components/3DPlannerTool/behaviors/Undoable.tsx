"use client";

import { useEffect, useRef } from "react";
import { Block } from "../types";

interface UndoableProps {
  blocks: Block[];
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  children: React.ReactNode;
  maxHistory?: number;
}

const Undoable: React.FC<UndoableProps> = ({
  blocks,
  setBlocks,
  children,
  maxHistory = 20,
}) => {
  const historyRef = useRef<Block[][]>([]);
  const prevSerialized = useRef<string>("");
  const skipNextTrack = useRef<boolean>(false);

  // Track changes unless skip flag is set
  useEffect(() => {
    if (skipNextTrack.current) {
      skipNextTrack.current = false;
      return;
    }

    const current = JSON.stringify(blocks);
    if (current !== prevSerialized.current) {
      prevSerialized.current = current;
      historyRef.current.push(blocks.map((b) => ({ ...b })));
      if (historyRef.current.length > maxHistory) {
        historyRef.current.shift();
      }
    }
  }, [blocks, maxHistory]);

  // Undo handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (historyRef.current.length > 1) {
          historyRef.current.pop(); // remove current
          const prev = historyRef.current[historyRef.current.length - 1];
          skipNextTrack.current = true; // skip tracking this update
          setBlocks(prev.map((b) => ({ ...b })));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setBlocks]);

  return <>{children}</>;
};

export default Undoable;
