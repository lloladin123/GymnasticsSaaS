"use client";

import React from "react";

interface ToolboxProps {
  onAddBlock: () => void;
  onAddSkumplint: () => void;
}

const Toolbox: React.FC<ToolboxProps> = ({ onAddBlock, onAddSkumplint }) => {
  return (
    <div className="w-56 bg-gray-100 p-4 shadow-md z-10 space-y-2">
      <h3 className="text-lg font-semibold mb-4">Toolbox</h3>
      <button
        onClick={onAddBlock}
        className="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Airtrack
      </button>
      <button
        onClick={onAddSkumplint}
        className="bg-green-500 text-white w-full px-4 py-2 rounded hover:bg-green-600"
      >
        Add Skumplint
      </button>
    </div>
  );
};

export default Toolbox;
