"use client";

import React, { useState } from "react";

const sections = [
  {
    title: "➕ Adding Blocks",
    content: (
      <p>
        Use the “Add Airtrack” button in the left toolbox to add a new block to
        the scene.
      </p>
    ),
  },
  {
    title: "🖱️ Selecting",
    content: (
      <p>Click on a block to select it. Click empty space to deselect.</p>
    ),
  },
  {
    title: "📦 Moving",
    content: (
      <ul className="list-disc list-inside ml-2">
        <li>
          <b>Drag</b> a block with your mouse
        </li>
        <li>
          <b>Arrow keys</b>: Move the selected block on the X/Z plane
        </li>
        <li>
          <b>Shift + Arrow Up/Down</b>: Move the selected block up/down on the Y
          axis
        </li>
      </ul>
    ),
  },
  {
    title: "🔄 Rotating",
    content: (
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
    ),
  },
  {
    title: "🗑️ Deleting",
    content: (
      <p>
        Press the <b>Delete</b> key while a block is selected to remove it.
      </p>
    ),
  },
  {
    title: "↩️ Undo / ↪️ Redo",
    content: (
      <p>
        Use <b>Ctrl + Z</b> to undo your last action and <b>Ctrl + Shift + Z</b>{" "}
        to redo it.
      </p>
    ),
  },
  {
    title: "📄 Duplicating",
    content: (
      <p>
        Press <b>Ctrl + D</b> (or Cmd + D on Mac) to duplicate the selected
        block.
      </p>
    ),
  },
  {
    title: "🎥 Camera Controls",
    content: (
      <>
        <p>
          Use your mouse to <b>orbit, pan, and zoom</b> around the scene.
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <b>Left-click + drag</b>: Rotate camera around the scene
          </li>
          <li>
            <b>Right-click + drag</b> or <b>two-finger drag</b>: Pan camera
          </li>
          <li>
            <b>Scroll wheel</b>: Zoom in and out
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "📐 Resizing Blocks",
    content: (
      <>
        <p>
          When a block is selected, use the sliders in the panel on the right to
          adjust its <b>Length</b>, <b>Width</b>, and <b>Height</b>.
        </p>
        <p>
          You can also click the numbers next to sliders to enter precise
          values.
        </p>
      </>
    ),
  },
];

const GuidePanel: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredSections = sections.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-64 bg-gray-100 p-4 border-l border-gray-300 text-sm z-10 overflow-y-auto max-h-screen">
      <h3 className="text-lg font-semibold mb-4">Guide</h3>

      <input
        type="text"
        placeholder="Search guide..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-2 py-1 border border-gray-300 rounded"
      />

      {filteredSections.map(({ title, content }) => (
        <div key={title} className="mb-4">
          <h4 className="font-medium">{title}</h4>
          {content}
        </div>
      ))}

      {filteredSections.length === 0 && (
        <p className="text-gray-500">No sections match your search.</p>
      )}
    </div>
  );
};

export default GuidePanel;
