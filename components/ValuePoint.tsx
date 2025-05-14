import { IValuePoint } from "@/Interfaces/IValuePoint";
import React, { JSX } from "react";

interface ValuePointProps {
  data: IValuePoint;
}

const ValuePoint = ({ data }: ValuePointProps) => {
  return (
    <div className="w-1/3 flex flex-col justify-center items-center space-y-2 text-center">
      <div className="w-10 h-10">{data.icon}</div>
      <h2 className="text-2xl font-black">{data.header}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default ValuePoint;
