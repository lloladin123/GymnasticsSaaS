"use client";

import React from "react";
import Airtrack from "./Airtrack";
import RectangularBlockFoam from "../Meshes/RectangularBlockFoam";
import { colors } from "../colors";
import { useAppSelector } from "@/app/redux/hooks";

interface Props {
  id: number; // Need id to get locked state from store
  type: string;
  isSelected: boolean;
  size?: [number, number, number];
}

const MeshRepresentation: React.FC<Props> = ({
  id,
  type,
  isSelected,
  size = [1, 1, 1],
}) => {
  // Grab locked state directly from redux for this block id
  const locked = useAppSelector((state) => {
    const block = state.blocks.blocks.find((b) => b.id === id);
    return block?.locked ?? false;
  });

  const selectionColor = locked ? colors.locked : colors.selected;

  switch (type) {
    case "skumplint":
      return (
        <RectangularBlockFoam
          isSelected={isSelected}
          selectionColor={selectionColor}
          size={size}
        />
      );
    case "airtrack":
    default:
      return (
        <Airtrack
          isSelected={isSelected}
          selectionColor={selectionColor}
          size={size}
        />
      );
  }
};

export default MeshRepresentation;
