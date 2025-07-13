"use client";

import React, { useRef } from "react";
import { Mesh } from "three";
import Draggable from "../behaviors/Draggable";
import Rotatable from "../behaviors/Rotatable";
import MeshRepresentation from "../Meshes/MeshRepresentation";
import Deletable from "../behaviors/Deletable";
import Selectable from "../behaviors/Selectable";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { setSelectedId } from "@/app/redux/slices/uiSlice";
import Lockable from "../behaviors/Lockable";

interface BlockProps {
  id: number;
  type: string;
  position: [number, number, number];
  behaviors?: string[];
}

const Block: React.FC<BlockProps> = ({
  id,
  type,
  position,
  behaviors = [],
}) => {
  const ref = useRef<Mesh>(null);
  const dispatch = useAppDispatch();

  // Selectors from Redux state
  const selectedId = useAppSelector((state) => state.ui.selectedId);
  const draggingId = useAppSelector((state) => state.ui.draggingId);
  const rotation = useAppSelector((state) => {
    const block = state.blocks.blocks.find((b) => b.id === id);
    return (block?.rotation ?? [0, 0, 0]) as [number, number, number];
  });
  const size = useAppSelector((state) => {
    const block = state.blocks.blocks.find((b) => b.id === id);
    return (block?.size ?? [1, 1, 1]) as [number, number, number];
  });
  const locked = useAppSelector((state) => {
    const block = state.blocks.blocks.find((b) => b.id === id);
    return block?.locked ?? false;
  });

  const isSelected = selectedId === id;
  const isDragging = draggingId === id;

  // Base content with selectable behavior and passing size to MeshRepresentation
  let content = (
    <Selectable id={id}>
      <MeshRepresentation
        type={type}
        id={id}
        isSelected={isSelected}
        size={size}
      />
    </Selectable>
  );

  if (behaviors.includes("deletable")) {
    content = <Deletable id={id}>{content}</Deletable>;
  }

  // DON'T TOUCH rotate, just keep as is
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
        initialPosition={position}
        selectedId={selectedId}
        isDragging={isDragging}
      >
        {content}
      </Draggable>
    );
  }

  content = <Lockable locked={locked}>{content}</Lockable>;

  return content;
};

export default Block;
