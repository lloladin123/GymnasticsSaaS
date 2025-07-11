"use client";

import React from "react";
import Airtrack from "./Airtrack";
import RectangularBlockFoam from "../Meshes/RectangularBlockFoam";
import { colors } from "../colors"; // adjust the path if needed

interface Props {
  type: string;
  isSelected: boolean;
  size?: [number, number, number]; // added size prop, optional
}

const MeshRepresentation: React.FC<Props> = ({
  type,
  isSelected,
  size = [1, 1, 1],
}) => {
  switch (type) {
    case "skumplint":
      return (
        <RectangularBlockFoam
          isSelected={isSelected}
          selectionColor={colors.selected}
          size={size}
        />
      );
    case "airtrack":
    default:
      return (
        <Airtrack
          isSelected={isSelected}
          selectionColor={colors.selected}
          size={size}
        />
      );
  }
};

export default MeshRepresentation;
