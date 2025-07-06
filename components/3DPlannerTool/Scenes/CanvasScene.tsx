"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Block as BlockType } from "../types";
import Block from "../Components/Block";
import Undoable, { UndoableRef } from "../behaviors/Undoable";
import ObjectInfoBar from "../Ui/ObjectInfoBar";
import GuidePanel from "../Ui/GuidePanel";
import Toolbox from "../Ui/Toolbox";
import UndoController from "../Controllers/UndoController ";

const CanvasScene: React.FC = () => {
  const [blocks, setBlocks] = useState<BlockType[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const orbitRef = useRef<any>(null);
  const [orbitEnabled, setOrbitEnabled] = useState(true);

  const undoableRef = useRef<UndoableRef>(null); // ref for Undoable

  const addBlock = () => {
    const newBlock: BlockType = {
      id: Date.now(),
      type: "airtrack",
      behaviors: ["selectable", "draggable", "rotatable", "deletable"],
      position: [0, 0.1, 0],
      rotation: [0, 0, 0],
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  const handleDrag = (id: number, newPos: [number, number, number]) => {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === id ? { ...block, position: newPos } : block
      )
    );
  };

  const handleRotate = (
    id: number,
    axis: "x" | "y" | "z",
    direction: "left" | "right",
    amount: number
  ) => {
    setBlocks((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block;
        const rotation = [...(block.rotation || [0, 0, 0])] as [
          number,
          number,
          number,
        ];
        const i = axis === "x" ? 0 : axis === "y" ? 1 : 2;
        rotation[i] += direction === "left" ? -amount : amount;
        return { ...block, rotation };
      })
    );
  };

  const handlePointerMissed = () => setSelectedId(null);
  const handlePointerUp = () => {
    setDraggingId(null);
    setOrbitEnabled(true);
  };

  return (
    <div className="flex flex-1 min-h-screen">
      <Toolbox onAddBlock={addBlock} />

      {/* Center Canvas */}
      <div className="flex-1 relative">
        <Canvas
          shadows
          camera={{ position: [0, 5, 10], fov: 50 }}
          onPointerMissed={handlePointerMissed}
          onPointerUp={handlePointerUp}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <Grid args={[20, 20]} cellSize={1} cellThickness={0.5} />
          <OrbitControls ref={orbitRef} enabled={orbitEnabled} />
          <Undoable ref={undoableRef} blocks={blocks} setBlocks={setBlocks}>
            {blocks.map((block) => (
              <Block
                key={block.id}
                {...block}
                isDragging={draggingId === block.id}
                isSelected={selectedId === block.id}
                setSelectedId={setSelectedId}
                setOrbitEnabled={setOrbitEnabled}
                setBlocks={setBlocks}
                onDragStart={(id) => {
                  setDraggingId(id);
                  setSelectedId(id);
                  setOrbitEnabled(false);
                }}
                onDragEnd={() => {
                  setDraggingId(null);

                  setTimeout(() => {
                    setOrbitEnabled(true);
                  }, 500);
                }}
                onDrag={handleDrag}
                onRotate={handleRotate}
              />
            ))}
          </Undoable>
          <EffectComposer>
            <Bloom
              intensity={0.1}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Undo/Redo controller handling keybindings */}
      <UndoController
        onUndo={() => undoableRef.current?.undo()}
        onRedo={() => undoableRef.current?.redo()}
      />

      {/* Bottompanel */}
      {selectedId !== null && (
        <div className="absolute bottom-0 left-56 right-64 flex justify-center z-20 pb-2">
          <ObjectInfoBar
            rotation={
              blocks.find((b) => b.id === selectedId)?.rotation || [0, 0, 0]
            }
            position={
              blocks.find((b) => b.id === selectedId)?.position || [0, 0, 0]
            }
          />
        </div>
      )}

      <GuidePanel />
    </div>
  );
};

export default CanvasScene;
