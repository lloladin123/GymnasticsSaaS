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
    }
  };

  // Track changes with batching
  useEffect(() => {
    if (skipNextTrack.current) {
      skipNextTrack.current = false;
      return;
    }

    // Clear previous batch timer and set a new one
    if (batchTimeout.current) clearTimeout(batchTimeout.current);
    batchTimeout.current = setTimeout(() => {
      pushToHistory();
      batchTimeout.current = null;
    }, batchDelay);

    // Also, optionally, push immediately if no batch delay wanted
    // pushToHistory();

    // Cleanup on unmount
    return () => {
      if (batchTimeout.current) clearTimeout(batchTimeout.current);
    };
  }, [blocks, maxHistory, batchDelay]);

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
