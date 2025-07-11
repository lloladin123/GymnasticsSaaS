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
import ObjectPanel from "../Ui/ObjectPanel";

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
    <div className="flex h-screen">
      {/* Toolbox */}
      <div className="w-64 border-r border-gray-300">
        <Toolbox
          onAddBlock={() => addBlockHandler("airtrack")}
          onAddSkumplint={() => addBlockHandler("skumplint")}
        />
      </div>

      {/* Center container relative for absolute positioning */}
      <div className="relative flex-1">
        {/* Canvas fills container */}
        <BlocksManager undoableRef={undoableRef} />

        {/* Info bar absolute positioned inside this relative container */}
        {selectedId !== null && (
          <>
            <div
              className={`w-4/12 bg-white absolute top-4 right-4 z-50 rounded shadow-lg pointer-events-auto`}
            >
              <ObjectPanel></ObjectPanel>
            </div>
            <div className="w-10/12 absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 rounded shadow-lg">
              <ObjectInfoBar
                rotation={
                  blocks.find((b) => b.id === selectedId)?.rotation || [0, 0, 0]
                }
                position={
                  blocks.find((b) => b.id === selectedId)?.position || [0, 0, 0]
                }
              />
            </div>
          </>
        )}
      </div>

      {/* GuidePanel */}
      <div className="w-64 border-l border-gray-300">
        <GuidePanel />
      </div>

      {/* Global controllers */}
      <GlobalControllers undoableRef={undoableRef} />
    </div>
  );
};

export default CanvasScene;
