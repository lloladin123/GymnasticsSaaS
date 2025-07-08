"use client";

import React from "react";
import Block from "./Block";
import { Block as BlockType } from "../types";
import FocusTracker from "./FocusTracker";
import { Canvas } from "@react-three/fiber";
import KeyboardBlocker from "./KeyboardBlocker";
import { Grid, OrbitControls } from "@react-three/drei";
import Undoable, { UndoableRef } from "../behaviors/Undoable";

interface BlocksManagerProps {
  blocks: BlockType[];
  setBlocks: React.Dispatch<React.SetStateAction<BlockType[]>>;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
  setOrbitEnabled: (enabled: boolean) => void;

  onDragStart: (id: number) => void;
  onDragEnd: () => void;
  onDrag: (id: number, pos: [number, number, number]) => void;
  onRotate: (
    id: number,
    axis: "x" | "y" | "z",
    direction: "left" | "right",
    amount: number
  ) => void;

  undoableRef: React.RefObject<UndoableRef>;
}

const BlocksManager: React.FC<BlocksManagerProps> = ({
  blocks,
  setBlocks,
  selectedId,
  setSelectedId,
  setOrbitEnabled,
  onDragStart,
  onDragEnd,
  onDrag,
  onRotate,
  undoableRef,
}) => {
  const [draggingId, setDraggingId] = React.useState<number | null>(null);

  const handleDragStart = (id: number) => {
    setDraggingId(id);
    onDragStart(id);
    setOrbitEnabled(false);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
    onDragEnd();
    setOrbitEnabled(true);
  };

  return (
    <FocusTracker
      onFocusChange={(isFocused) => {
        if (!isFocused) setSelectedId(null);
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 5, 10], fov: 50 }}
        onPointerMissed={() => setSelectedId(null)}
        onPointerUp={handleDragEnd}
        style={{ height: "100vh", width: "100%" }}
      >
        <KeyboardBlocker active />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Grid args={[20, 20]} cellSize={1} cellThickness={0.5} />
        <OrbitControls enabled={true} />

        <Undoable ref={undoableRef} blocks={blocks} setBlocks={setBlocks}>
          {blocks.map((block) => (
            <Block
              key={block.id}
              {...block}
              isSelected={selectedId === block.id}
              isDragging={draggingId === block.id}
              setSelectedId={setSelectedId}
              setOrbitEnabled={setOrbitEnabled}
              setBlocks={setBlocks}
              onDragStart={() => handleDragStart(block.id)}
              onDragEnd={handleDragEnd}
              onDrag={onDrag}
              onRotate={onRotate}
            />
          ))}
        </Undoable>
      </Canvas>
    </FocusTracker>
  );
};

export default BlocksManager;
