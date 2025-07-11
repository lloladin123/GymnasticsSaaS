"use client";

import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Block } from "../types";
import { useAppDispatch } from "@/app/redux/hooks";
import { setBlocks } from "@/app/redux/slices/blocksSlice";

export interface UndoableRef {
  undo: () => void;
  redo: () => void;
  skipNext: () => void; // expose method to skip history push
}

interface UndoableProps {
  blocks: Block[];
  maxHistory?: number;
  batchDelay?: number;
  children: React.ReactNode;
}

const Undoable = forwardRef<UndoableRef, UndoableProps>(
  ({ blocks, children, maxHistory = 20, batchDelay = 300 }, ref) => {
    const dispatch = useAppDispatch();

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
        redoStackRef.current = [];
      }
    };

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

    useImperativeHandle(ref, () => ({
      undo() {
        if (historyRef.current.length > 1) {
          const current = historyRef.current.pop()!;
          redoStackRef.current.push(current);
          const prev = historyRef.current[historyRef.current.length - 1];
          skipNextTrack.current = true;
          dispatch(setBlocks(prev.map((b) => ({ ...b }))));
        }
      },
      redo() {
        if (redoStackRef.current.length > 0) {
          const redo = redoStackRef.current.pop()!;
          historyRef.current.push(redo);
          skipNextTrack.current = true;
          dispatch(setBlocks(redo.map((b) => ({ ...b }))));
        }
      },
      skipNext() {
        skipNextTrack.current = true;
      },
    }));

    return <>{children}</>;
  }
);

export default Undoable;
