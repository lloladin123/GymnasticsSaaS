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

  const isSelected = selectedId === id;
  const isDragging = draggingId === id;

  // Set selection in Redux
  const handleSetSelectedId = (newId: number | null) => {
    dispatch(setSelectedId(newId));
  };

  // Base content with selectable behavior
  let content = (
    <Selectable id={id}>
      <MeshRepresentation type={type} isSelected={isSelected} />
    </Selectable>
  );

  // Wrap with deletable if behavior exists
  if (behaviors.includes("deletable")) {
    content = <Deletable id={id}>{content}</Deletable>;
  }

  // Wrap with rotatable using Redux rotation state
  if (behaviors.includes("rotatable")) {
    content = (
      <Rotatable ref={ref} rotation={rotation}>
        {content}
      </Rotatable>
    );
  }

  // Wrap with draggable, passing necessary Redux-driven props
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

  return content;
};

export default Block;
