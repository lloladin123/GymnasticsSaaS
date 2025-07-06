"use client";

import { useEffect, useRef } from "react";
import { Block } from "../types";

interface UndoableProps {
  blocks: Block[];
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  children: React.ReactNode;
  maxHistory?: number;
  batchDelay?: number; // time window (ms) to batch rapid changes
}

const Undoable: React.FC<UndoableProps> = ({
  blocks,
  setBlocks,
  children,
  maxHistory = 20,
  batchDelay = 300,
}) => {
  const historyRef = useRef<Block[][]>([]);
  const redoStackRef = useRef<Block[][]>([]);
  const prevSerialized = useRef<string>("");
  const skipNextTrack = useRef<boolean>(false);
  const batchTimeout = useRef<NodeJS.Timeout | null>(null);

  const pushToHistory = () => {
    const current = JSON.stringify(blocks);
    if (current !== prevSerialized.current) {
      prevSerialized.current = current;
      historyRef.current.push(blocks.map((b) => ({ ...b })));
      if (historyRef.current.length > maxHistory) {
        historyRef.current.shift();
      }
      // Clear redo stack on new action
      redoStackRef.current = [];
    }
  };

  // Track changes with batching
  useEffect(() => {
    if (skipNextTrack.current) {
      skipNextTrack.current = false;
      return;
    }

    if (batchTimeout.current) clearTimeout(batchTimeout.current);
    batchTimeout.current = setTimeout(() => {
      pushToHistory();
      batchTimeout.current = null;
    }, batchDelay);

    return () => {
      if (batchTimeout.current) clearTimeout(batchTimeout.current);
    };
  }, [blocks, maxHistory, batchDelay]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Undo: Ctrl+Z or Cmd+Z (without Shift)
      if (e.ctrlKey && !e.shiftKey && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (historyRef.current.length > 1) {
          const current = historyRef.current.pop()!;
          redoStackRef.current.push(current);
          const prev = historyRef.current[historyRef.current.length - 1];
          skipNextTrack.current = true;
          setBlocks(prev.map((b) => ({ ...b })));
        }
      }

      // Redo: Ctrl+Shift+Z or Cmd+Shift+Z
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (redoStackRef.current.length > 0) {
          const redo = redoStackRef.current.pop()!;
          historyRef.current.push(redo);
          skipNextTrack.current = true;
          setBlocks(redo.map((b) => ({ ...b })));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setBlocks]);

  return <>{children}</>;
};

export default Undoable;
