"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { setSelectedId } from "@/app/redux/slices/uiSlice";

interface SelectableProps {
  id: number;
  children: React.ReactNode;
}

const Selectable: React.FC<SelectableProps> = ({ id, children }) => {
  const selectedId = useAppSelector((state) => state.ui.selectedId);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.PointerEvent) => {
    e.stopPropagation();
    console.log("[Selectable] selected ID:", id);
    dispatch(setSelectedId(id));
  };

  return <group onClick={handleClick}>{children}</group>;
};

export default Selectable;
