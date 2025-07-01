"use client";
import CanvasScene from "./CanvasScene";

const ThreeDPlannerTool = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="w-full bg-gray-800 text-white p-2 text-sm">
        Rotation Mode: Click block → ⤺ ⤻ buttons show
      </div>
      <CanvasScene />
    </div>
  );
};

export default ThreeDPlannerTool;
