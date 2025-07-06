import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Block } from "../types";

export interface UndoableRef {
  undo: () => void;
  redo: () => void;
}

interface UndoableProps {
  blocks: Block[];
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  maxHistory?: number;
  batchDelay?: number;
  children: React.ReactNode;
}

const Undoable = forwardRef<UndoableRef, UndoableProps>(
  ({ blocks, setBlocks, children, maxHistory = 20, batchDelay = 300 }, ref) => {
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
          setBlocks(prev.map((b) => ({ ...b })));
        }
      },
      redo() {
        if (redoStackRef.current.length > 0) {
          const redo = redoStackRef.current.pop()!;
          historyRef.current.push(redo);
          skipNextTrack.current = true;
          setBlocks(redo.map((b) => ({ ...b })));
        }
      },
    }));

    return <>{children}</>;
  }
);

export default Undoable;
