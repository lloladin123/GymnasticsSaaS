"use client";
import CanvasScene from "../Scenes/CanvasScene";

const ThreeDPlannerTool = () => {
  return (
    <div className="flex flex-col h-132 w-full">
      <div className="w-full bg-gray-800 text-white p-2 text-center text-sm">
        3D planer for gymnastic pratice setup
      </div>
      <CanvasScene />
    </div>
  );
};

export default ThreeDPlannerTool;
