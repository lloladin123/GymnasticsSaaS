"use client";

import React from "react";
import Airtrack from "./Airtrack";
import RectangularBlockFoam from "../Meshes/RectangularBlockFoam";
import { colors } from "../colors"; // adjust path as needed

interface Props {
  type: string;
  isSelected: boolean;
}

const MeshRepresentation: React.FC<Props> = ({ type, isSelected }) => {
  switch (type) {
    case "skumplint":
      return (
        <RectangularBlockFoam
          isSelected={isSelected}
          selectionColor={colors.selected}
        />
      );
    case "airtrack":
    default:
      return (
        <Airtrack isSelected={isSelected} selectionColor={colors.selected} />
      );
  }
};

export default MeshRepresentation;
