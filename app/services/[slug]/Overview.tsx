import { ImageIcon } from "lucide-react";
import React from "react";

interface OverviewProps {
  variants: "rows" | "cols";
}

const Overview = ({ variants = "cols" }: OverviewProps) => {
  return (
    <section
      className={` ${variants === "rows" ? "flex flex-col space-y-4" : "grid grid-cols-2 place-items-center"}   px-10`}
    >
      <div className={`${variants === "rows" ? "text-center" : ""}`}>
        <h2 className="text-4xl font-black">
          Unlock Your Potential: Discover the Transformative Power of Gymnastics
        </h2>
        <p>
          Gymnastic is more than a sport; it's a path to enhanced strength,
          flexibility, and coordination. Wether you're a beginner or an
          experienced athelte, our programs cater to all levels, helping you
          achieve your fitness goals.
        </p>
      </div>
      <div
        className={`w-full ${variants === "rows" ? "h-120" : "h-100"}  bg-gray-200 flex justify-center items-center`}
      >
        <ImageIcon className="w-2/4 h-2/4"></ImageIcon>
      </div>
    </section>
  );
};

export default Overview;
