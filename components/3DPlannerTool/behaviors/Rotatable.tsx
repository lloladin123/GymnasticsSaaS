"use client";

import React, { forwardRef } from "react";
import { Mesh, Euler } from "three";

interface RotatableProps {
  rotation: [number, number, number];
  children: React.ReactNode;
}

const Rotatable = forwardRef<Mesh, RotatableProps>(
  ({ rotation, children }, ref) => {
    return (
      <group ref={ref} rotation={new Euler(...rotation)}>
        {children}
      </group>
    );
  }
);

export default Rotatable;
