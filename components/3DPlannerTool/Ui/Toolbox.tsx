"use client";

import React from "react";

interface ToolboxProps {
  onAddBlock: (type: string) => void;
}

const Toolbox: React.FC<ToolboxProps> = ({ onAddBlock }) => {
  return (
    <div className="w-full h-full bg-gray-100 p-4 shadow-md z-10 space-y-2">
      <h3 className="text-lg font-semibold mb-4">Toolbox</h3>

      <button
        onClick={() => onAddBlock("airtrack")}
        className="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Airtrack
      </button>

      <button
        onClick={() => onAddBlock("skumplint")}
        className="bg-green-500 text-white w-full px-4 py-2 rounded hover:bg-green-600"
      >
        Add Skumplint
      </button>
    </div>
  );
};

export default Toolbox;
