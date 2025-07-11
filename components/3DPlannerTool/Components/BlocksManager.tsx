"use client";

import React, { useState, useEffect } from "react";
import Block from "./Block";
import FocusTracker from "./FocusTracker";
import { Canvas } from "@react-three/fiber";
import KeyboardBlocker from "./KeyboardBlocker";
import { Grid, OrbitControls } from "@react-three/drei";
import Undoable, { UndoableRef } from "../behaviors/Undoable";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { setSelectedId, setOrbitEnabled } from "@/app/redux/slices/uiSlice";
import { setBlocks } from "@/app/redux/slices/blocksSlice";
import { setPresent } from "@/app/redux/slices/undoSlice";

interface BlocksManagerProps {
  undoableRef: React.RefObject<UndoableRef>;
}

const BlocksManager: React.FC<BlocksManagerProps> = ({ undoableRef }) => {
  const dispatch = useAppDispatch();

  const blocks = useAppSelector((state) => state.blocks.blocks);
  const undoPresent = useAppSelector((state) => state.undo.present);
  const selectedId = useAppSelector((state) => state.ui.selectedId);
  const orbitEnabled = useAppSelector((state) => state.ui.orbitEnabled);

  const [draggingId, setDraggingId] = useState<number | null>(null);
  const skipNextTrack = React.useRef(false);
  const onUndoRedo = () => {
    skipNextTrack.current = true;
  };

  // Sync undo.present snapshots to blocks slice state with skip flag
  useEffect(() => {
    if (undoPresent) {
      skipNextTrack.current = true;
      dispatch(setBlocks(undoPresent));
    }
  }, [undoPresent, dispatch]);

  // Push blocks state to undo.present with debounce and skip logic
  useEffect(() => {
    if (skipNextTrack.current) {
      skipNextTrack.current = false;
      return; // skip dispatch to avoid clearing redo stack
    }

    const handler = setTimeout(() => {
      dispatch(setPresent(blocks));
    }, 300);

    return () => clearTimeout(handler);
  }, [blocks, dispatch]);

  const handleDragStart = (id: number) => {
    setDraggingId(id);
    dispatch(setSelectedId(id));
    dispatch(setOrbitEnabled(false));
  };

  const handleDragEnd = () => {
    setDraggingId(null);
    dispatch(setOrbitEnabled(true));
  };

  return (
    <FocusTracker
      onFocusChange={(isFocused) => {
        if (!isFocused) dispatch(setSelectedId(null));
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 20, 25], fov: 50 }}
        onPointerMissed={() => dispatch(setSelectedId(null))}
        onPointerUp={handleDragEnd}
        style={{ height: "100vh", width: "100%" }}
      >
        <KeyboardBlocker active />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Grid args={[34, 16]} cellSize={1} cellThickness={0.5} />
        <OrbitControls target0={[0, 8, 0]} enabled={orbitEnabled} />

        <Undoable ref={undoableRef} blocks={blocks}>
          {blocks.map((block) => (
            <Block
              key={block.id}
              id={block.id}
              type={block.type}
              position={block.position}
              behaviors={block.behaviors}
            />
          ))}
        </Undoable>
      </Canvas>
    </FocusTracker>
  );
};

export default BlocksManager;
