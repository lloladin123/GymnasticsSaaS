"use client";

import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Block } from "./types";
import DraggableBlock from "./DraggableBlock";
import OrbitToggle from "./OrbitToggle";

const CanvasScene: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const orbitRef = useRef<any>(null);

  const setOrbitEnabled = (enabled: boolean) => {
    if (orbitRef.current) {
      orbitRef.current.enabled = enabled;
    }
  };

  const addBlock = () => {
    const newBlock: Block = {
      id: Date.now(),
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
    if (orbitRef.current) orbitRef.current.enabled = true;
  };

  return (
    <div className="flex flex-1">
      <div className="w-56 bg-gray-100 p-4 shadow-md z-10">
        <h3 className="text-lg font-semibold mb-4">Toolbox</h3>
        <button
          onClick={addBlock}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Airtrack
        </button>
      </div>
      <div className="flex-1">
        <Canvas
          shadows
          camera={{ position: [0, 5, 10], fov: 50 }}
          onPointerMissed={handlePointerMissed}
          onPointerUp={handlePointerUp}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <Grid args={[20, 20]} cellSize={1} cellThickness={0.5} />
          <OrbitToggle orbitRef={orbitRef} />
          {blocks.map((block) => (
            <DraggableBlock
              key={block.id}
              {...block}
              isDragging={draggingId === block.id}
              isSelected={selectedId === block.id}
              setSelectedId={setSelectedId}
              setOrbitEnabled={setOrbitEnabled}
              onDragStart={(id) => {
                setDraggingId(id);
                setSelectedId(id);
                if (orbitRef.current) orbitRef.current.enabled = false;
              }}
              onDragEnd={() => {
                setDraggingId(null);
                if (orbitRef.current) orbitRef.current.enabled = true;
              }}
              onDrag={handleDrag}
              onRotate={handleRotate}
            />
          ))}
          <EffectComposer>
            <Bloom
              intensity={0.1}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasScene;
