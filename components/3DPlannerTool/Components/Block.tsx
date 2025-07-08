"use client";

import React, { useRef } from "react";
import { Mesh } from "three";
import Draggable from "../behaviors/Draggable";
import Rotatable from "../behaviors/Rotatable";
import MeshRepresentation from "../Meshes/MeshRepresentation";
import Deletable from "../behaviors/Deletable";
import Selectable from "../behaviors/Selectable";

interface BlockProps {
  id: number;
  type: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  behaviors?: string[];
  isSelected: boolean;
  isDragging: boolean;
  onDragStart: (id: number) => void;
  onDragEnd: () => void;
  onDrag: (id: number, pos: [number, number, number]) => void;
  onRotate: (
    id: number,
    axis: "x" | "y" | "z",
    direction: "left" | "right",
    amount: number
  ) => void;
  setSelectedId: (id: number | null) => void;
  setOrbitEnabled: (enabled: boolean) => void;
  setBlocks: React.Dispatch<React.SetStateAction<any[]>>;
}

const Block: React.FC<BlockProps> = ({
  id,
  type,
  position,
  rotation = [0, 0, 0],
  behaviors = [],
  isSelected,
  isDragging,
  onDragStart,
  onDragEnd,
  onDrag,
  onRotate,
  setSelectedId,
  setOrbitEnabled,
  setBlocks,
}) => {
  const ref = useRef<Mesh>(null);

  // ✅ Start with innermost: Selectable
  let content = (
    <Selectable
      id={id}
      selectedId={isSelected ? id : null}
      setSelectedId={setSelectedId}
    >
      <MeshRepresentation type={type} isSelected={isSelected} />
    </Selectable>
  );

  if (behaviors.includes("deletable")) {
    content = (
      <Deletable
        id={id}
        selectedId={isSelected ? id : null}
        setSelectedId={setSelectedId}
        setBlocks={setBlocks}
      >
        {content}
      </Deletable>
    );
  }

  if (behaviors.includes("rotatable")) {
    content = (
      <Rotatable ref={ref} rotation={rotation}>
        {content}
      </Rotatable>
    );
  }

  if (behaviors.includes("draggable")) {
    content = (
      <Draggable
        ref={ref}
        id={id}
        selectedId={isSelected ? id : null}
        initialPosition={position}
        isDragging={isDragging}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrag={onDrag}
        setOrbitEnabled={setOrbitEnabled}
      >
        {content}
      </Draggable>
    );
  }

  return content;
};

export default Block;
