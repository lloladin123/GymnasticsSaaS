"use client";

import React from "react";
import UndoController from "../Controllers/UndoController ";
import DragController from "../Controllers/DragController";
import RotationController from "../Controllers/RotationController ";
import DuplicateController from "./DuplicateController";

interface GlobalControllersProps {
  selectedId: number | null;
  onUndo: () => void;
  onRedo: () => void;
  onMove: (id: number, newPos: [number, number, number]) => void;
  getPosition: (id: number) => [number, number, number] | undefined;
  onRotate: (
    axis: "x" | "y" | "z",
    direction: "left" | "right",
    amount: number
  ) => void;
  onDuplicate: (id: number) => void;
  rotationActive: boolean;
}

const GlobalControllers: React.FC<GlobalControllersProps> = ({
  selectedId,
  onUndo,
  onRedo,
  onMove,
  getPosition,
  onRotate,
  onDuplicate,
  rotationActive,
}) => {
  return (
    <>
      <UndoController onUndo={onUndo} onRedo={onRedo} />

      <DragController
        selectedId={selectedId}
        onMove={onMove}
        getPosition={getPosition}
      />

      <RotationController isActive={rotationActive} onRotate={onRotate} />

      <DuplicateController selectedId={selectedId} onDuplicate={onDuplicate} />
    </>
  );
};

export default GlobalControllers;
