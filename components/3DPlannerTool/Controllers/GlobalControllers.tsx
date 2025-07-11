import React from "react";
import UndoController from "../Controllers/UndoController ";
import DragController from "../Controllers/DragController";
import RotationController from "../Controllers/RotationController ";
import DuplicateController from "../Controllers/DuplicateController";
import { useAppSelector } from "@/app/redux/hooks";
import { UndoableRef } from "../behaviors/Undoable";

interface GlobalControllersProps {
  undoableRef: React.RefObject<UndoableRef>;
}

const GlobalControllers: React.FC<GlobalControllersProps> = ({
  undoableRef,
}) => {
  const rotationActive = useAppSelector(
    (state) => state.ui.selectedId !== null
  );

  return (
    <>
      <UndoController />
      <DragController />
      <RotationController isActive={rotationActive} />
      <DuplicateController undoableRef={undoableRef} />
    </>
  );
};

export default GlobalControllers;
