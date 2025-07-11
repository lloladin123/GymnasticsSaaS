"use client";

import React, { useState, useRef } from "react";
import BlocksManager from "../Components/BlocksManager";
import Toolbox from "../Ui/Toolbox";
import GlobalControllers from "../Controllers/GlobalControllers";
import ObjectInfoBar from "../Ui/ObjectInfoBar";
import GuidePanel from "../Ui/GuidePanel";
import { Block as BlockType } from "../types";

const CanvasScene: React.FC = () => {
  const [blocks, setBlocks] = useState<BlockType[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [orbitEnabled, setOrbitEnabled] = useState(true);
  const [canvasActive, setCanvasActive] = useState(false);

  const undoableRef = useRef<any>(null);

  // Add block function
  const addBlock = () => {
    const newBlock: BlockType = {
      id: Date.now(),
      type: "airtrack",
      behaviors: [
        "selectable",
        "draggable",
        "rotatable",
        "deletable",
        "duplicatable",
      ],
      position: [0, 0.1, 0],
      rotation: [0, 0, 0],
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  const addSkumplint = () => {
    const newBlock: BlockType = {
      id: Date.now(),
      type: "skumplint",
      behaviors: [
        "selectable",
        "draggable",
        "rotatable",
        "deletable",
        "duplicatable",
      ],
      position: [0, 0.1, 0],
      rotation: [0, 0, 0],
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  // Drag handlers
  const onDragStart = (id: number) => {
    setOrbitEnabled(false);
    setSelectedId(id);
  };
  const onDragEnd = () => {
    setOrbitEnabled(true);
  };
  const onDrag = (id: number, pos: [number, number, number]) => {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === id ? { ...block, position: pos } : block
      )
    );
  };

  // Rotate handler
  const onRotate = (
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

  // Duplicate handler - receives id, finds block internally
  const handleDuplicate = (id: number) => {
    const blockToDuplicate = blocks.find((b) => b.id === id);
    if (!blockToDuplicate) return;
    const newBlock: BlockType = {
      ...blockToDuplicate,
      id: Date.now(),
      position: [
        blockToDuplicate.position[0] + 0.5,
        blockToDuplicate.position[1],
        blockToDuplicate.position[2] + 0.5,
      ],
    };
    setBlocks((prev) => [...prev, newBlock]);
    setSelectedId(newBlock.id);
  };

  return (
    <div className="flex flex-1 min-h-screen">
      {/* Toolbox */}
      <Toolbox onAddBlock={addBlock} onAddSkumplint={addSkumplint} />

      {/* BlocksManager */}
      <div className="flex-1 relative">
        <BlocksManager
          blocks={blocks}
          setBlocks={setBlocks}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          setOrbitEnabled={setOrbitEnabled}
          orbitEnabled={orbitEnabled}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDrag={onDrag}
          onRotate={onRotate}
          undoableRef={undoableRef}
        />
      </div>

      {/* GlobalControllers */}
      <GlobalControllers
        selectedId={selectedId}
        onUndo={() => undoableRef.current?.undo()}
        onRedo={() => undoableRef.current?.redo()}
        onMove={onDrag}
        getPosition={(id) => blocks.find((b) => b.id === id)?.position}
        onRotate={(axis, direction, amount) => {
          if (selectedId !== null) {
            onRotate(selectedId, axis, direction, amount);
          }
        }}
        onDuplicate={handleDuplicate}
        rotationActive={selectedId !== null}
      />

      {/* Selected Block Info */}
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
