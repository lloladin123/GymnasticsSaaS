"use client";
import CanvasScene from "./CanvasScene";

const ThreeDPlannerTool = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="w-full bg-gray-800 text-white p-2 text-center text-sm">
        3D planer for gymnastic pratice setup planning
      </div>
      <CanvasScene />
    </div>
  );
};

export default ThreeDPlannerTool;
