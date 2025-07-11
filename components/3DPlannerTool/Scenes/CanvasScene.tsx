"use client";

import React, { useRef } from "react";
import BlocksManager from "../Components/BlocksManager";
import Toolbox from "../Ui/Toolbox";
import GlobalControllers from "../Controllers/GlobalControllers";
import ObjectInfoBar from "../Ui/ObjectInfoBar";
import GuidePanel from "../Ui/GuidePanel";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  addBlock,
  deleteBlock,
  updateBlockPosition,
  updateBlockRotation,
  duplicateBlockById,
} from "@/app/redux/slices/blocksSlice";
import { setSelectedId, setOrbitEnabled } from "@/app/redux/slices/uiSlice";

const CanvasScene: React.FC = () => {
  const dispatch = useAppDispatch();
  const blocks = useAppSelector((state) => state.blocks.blocks);
  const selectedId = useAppSelector((state) => state.ui.selectedId);
  const orbitEnabled = useAppSelector((state) => state.ui.orbitEnabled);

  const undoableRef = useRef<any>(null);

  const addBlockHandler = (type: string) => {
    const newBlock = {
      id: Date.now(),
      type,
      behaviors: [
        "selectable",
        "draggable",
        "rotatable",
        "deletable",
        "duplicatable",
      ],
      position: [0, 0.1, 0] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
    };
    dispatch(addBlock(newBlock));
    dispatch(setSelectedId(newBlock.id));
  };

  const getPosition = (id: number): [number, number, number] | undefined => {
    return blocks.find((b) => b.id === id)?.position;
  };

  return (
    <div className="flex flex-1 min-h-screen">
      <Toolbox
        onAddBlock={() => addBlockHandler("airtrack")}
        onAddSkumplint={() => addBlockHandler("skumplint")}
      />

      <div className="flex-1 relative">
        <BlocksManager undoableRef={undoableRef} />
      </div>

      {/* No props needed, all logic internal */}
      <GlobalControllers undoableRef={undoableRef} />

      {selectedId !== null && (
        <ObjectInfoBar
          rotation={
            blocks.find((b) => b.id === selectedId)?.rotation || [0, 0, 0]
          }
          position={
            blocks.find((b) => b.id === selectedId)?.position || [0, 0, 0]
          }
        />
      )}

      <GuidePanel />
    </div>
  );
};

export default CanvasScene;
