import { IValuePoint } from "@/Interfaces/IValuePoint";
import React, { JSX } from "react";

interface ValuePointProps {
  data: IValuePoint;
  align?: "left" | "center";
}

const ValuePoint = ({ data, align = "center" }: ValuePointProps) => {
  const isLeft = align === "left";
  return (
    <div
      className={`w-1/3 flex flex-col justify-center  space-y-2 ${
        isLeft ? "items-start text-left" : "items-center text-center"
      }`}
    >
      <div className="w-10 h-10">{data.icon}</div>
      <h2 className="text-2xl font-black">{data.header}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default ValuePoint;
