"use client";

import React from "react";

interface Props {
  rotation: [number, number, number];
  position: [number, number, number];
}

const ObjectInfoBar: React.FC<Props> = ({ rotation, position }) => {
  const [x, y, z] = rotation;
  const [px, py, pz] = position;

  const degreesX = ((x * 180) / Math.PI).toFixed(1);
  const degreesY = ((y * 180) / Math.PI).toFixed(1);
  const degreesZ = ((z * 180) / Math.PI).toFixed(1);

  return (
    <div className="bg-gray-800 text-white px-4 py-2 w-7/12 text-sm flex justify-between">
      <div className="flex gap-2">
        <span className="font-semibold">Rotation:</span>
        <span>X: {degreesX}°</span>
        <span>Y: {degreesY}°</span>
        <span>Z: {degreesZ}°</span>
      </div>
      <div className="flex gap-2">
        <span className="font-semibold">Position:</span>
        <span>X: {px.toFixed(1)}</span>
        <span>Y: {py.toFixed(1)}</span>
        <span>Z: {pz.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default ObjectInfoBar;
