"use client";

import React from "react";

interface SelectableProps {
  id: number;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
  children: React.ReactNode;
}

const Selectable: React.FC<SelectableProps> = ({
  id,
  selectedId,
  setSelectedId,
  children,
}) => {
  const handleClick = (e: React.PointerEvent) => {
    // ❌ Don't stop propagation here!
    // e.stopPropagation(); <- remove this

    console.log("[Selectable] selected ID:", id);
    setSelectedId(id);
  };

  return <group onClick={handleClick}>{children}</group>;
};

export default Selectable;
