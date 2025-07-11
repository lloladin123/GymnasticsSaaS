"use client";

import React from "react";

interface Props {
  rotation: [number, number, number];
  position: [number, number, number];
}

const ObjectInfoBar: React.FC<Props> = ({ rotation, position }) => {
  const [x, y, z] = rotation;
  const [px, py, pz] = position;

  // Normalize radians to 0-360 degrees
  const toDegreesNormalized = (rad: number) => {
    let deg = (rad * 180) / Math.PI;
    deg = ((deg % 360) + 360) % 360;
    return deg.toFixed(1);
  };

  const degreesX = toDegreesNormalized(x);
  const degreesY = toDegreesNormalized(y);
  const degreesZ = toDegreesNormalized(z);

  return (
    <div className="w-full text-white p-4 bg-gray-800 flex flex-row space-x-2">
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
