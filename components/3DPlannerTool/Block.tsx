"use client";

import React, { useRef } from "react";
import { Mesh } from "three";
import Draggable from "./behaviors/Draggable";
import Rotatable from "./behaviors/Rotatable";
import MeshRepresentation from "./MeshRepresentation";
import Deletable from "./behaviors/Deletable";

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

  let content = <MeshRepresentation type={type} isSelected={isSelected} />;

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
      <Rotatable
        ref={ref}
        rotation={rotation}
        isSelected={isSelected}
        isDragging={isDragging}
        onRotate={(axis, dir, amt) => onRotate(id, axis, dir, amt)}
      >
        {content}
      </Rotatable>
    );
  }

  if (behaviors.includes("draggable")) {
    content = (
      <Draggable
        ref={ref}
        id={id}
        initialPosition={position}
        isDragging={isDragging}
        setSelectedId={setSelectedId}
        setOrbitEnabled={setOrbitEnabled}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrag={onDrag}
      >
        {content}
      </Draggable>
    );
  }

  return content;
};

export default Block;
