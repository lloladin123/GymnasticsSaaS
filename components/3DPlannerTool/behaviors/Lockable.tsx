"use client";

import React from "react";

interface LockableProps {
  locked?: boolean;
  children: React.ReactNode;
}

const Lockable: React.FC<LockableProps> = ({ locked, children }) => {
  // No-op function to disable raycasting
  const noRaycast = () => {};

  return <group raycast={locked ? noRaycast : undefined}>{children}</group>;
};

export default Lockable;
