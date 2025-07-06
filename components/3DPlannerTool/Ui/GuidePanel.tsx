"use client";

import React from "react";

const GuidePanel: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 border-l border-gray-300 text-sm z-10 overflow-y-auto max-h-screen">
      <h3 className="text-lg font-semibold mb-4">Guide</h3>

      <div className="mb-4">
        <h4 className="font-medium">➕ Adding Blocks</h4>
        <p>
          Use the “Add Airtrack” button in the left toolbox to add a new block
          to the scene.
        </p>
      </div>

      <div className="mb-4">
        <h4 className="font-medium">🖱️ Selecting</h4>
        <p>Click on a block to select it. Click empty space to deselect.</p>
      </div>

      <div className="mb-4">
        <h4 className="font-medium">📦 Moving</h4>
        <ul className="list-disc list-inside ml-2">
          <li>
            <b>Drag</b> a block with your mouse
          </li>
          <li>
            <b>Arrow keys</b>: Move the selected block on the X/Z plane
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-medium">🔄 Rotating</h4>
        <ul className="list-disc list-inside ml-2">
          <li>
            <b>Q / E</b>: Rotate around Y-axis
          </li>
          <li>
            <b>W / S</b>: Rotate around X-axis
          </li>
          <li>
            <b>A / D</b>: Rotate around Z-axis
          </li>
          <li>Use the on-screen buttons when a block is selected</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-medium">🗑️ Deleting</h4>
        <p>
          Press the <b>Delete</b> key while a block is selected to remove it.
        </p>
      </div>

      <div className="mb-4">
        <h4 className="font-medium">↩️ Undo / ↪️ Redo</h4>
        <p>
          Use <b>Ctrl + Z</b> to undo your last action and{" "}
          <b>Ctrl + Shift + Z</b> to redo it.
        </p>
      </div>
    </div>
  );
};

export default GuidePanel;
