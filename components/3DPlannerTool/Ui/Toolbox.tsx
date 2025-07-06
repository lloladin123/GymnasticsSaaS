"use client";

import React from "react";

interface ToolboxProps {
  onAddBlock: () => void;
}

const Toolbox: React.FC<ToolboxProps> = ({ onAddBlock }) => {
  return (
    <div className="w-56 bg-gray-100 p-4 shadow-md z-10">
      <h3 className="text-lg font-semibold mb-4">Toolbox</h3>
      <button
        onClick={onAddBlock}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Airtrack
      </button>
    </div>
  );
};

export default Toolbox;
