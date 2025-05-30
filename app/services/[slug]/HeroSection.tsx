import Link from "next/link";
import React from "react";

interface HeroSectionProp {
  variants: "cols" | "rows";
}

const HeroSection = ({ variants = "rows" }: HeroSectionProp) => {
  return (
    <section
      className={`grid ${variants === "rows" ? "grid-rows-4 text-center" : "grid-cols-2"} p-10 py-20 place-items-center`}
    >
      <div className="flex flex-col space-y-4">
        <span>Elevate</span>
        <h1 className="text-4xl font-black">
          Gymnastics Unleash Your Potential
        </h1>
      </div>
      <div className="flex flex-col space-y-4">
        <p>
          Join our dynamic gymnastics program design for all ages and skill
          levels. Experience the joy of movment, build strength, and foster a
          sense of community
        </p>
        <div
          className={`flex flex-row space-x-4 ${variants === "rows" ? "items-center justify-center" : ""}`}
        >
          <Link className="btn btn--black" href="#">
            Learn more
          </Link>
          <Link className="btn btn--hover-underline" href="#">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
