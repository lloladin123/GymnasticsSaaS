import { ImageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Classes = () => {
  return (
    <section
      className={`flex flex-col space-y-8 items-center justify-center mt-20 px-10`}
    >
      <div className="grid grid-cols-2">
        <div className="flex flex-col space-y-4">
          <span>Explore</span>
          <h2 className="text-4xl font-black">
            Disover Our Diverse Gymnastics Classes Today
          </h2>
        </div>
        <div className="flex flex-col space-y-4">
          <p>
            We offer a wide range of gymnastics classes tailored for all ages
            and skill levels. From beginners to advanced atheltes, our expert
            instructors are dedicated to helping each participant achieve their
            personal best. Joun us to experience the joy of movement and thrill
            of gymnastics!
          </p>
          <div className="flex flex-row space-x4">
            <Link className="btn btn--ghost-black" href="">
              Learn More
            </Link>
            <Link className="btn btn--arrow" href="">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-300 h-125 flex items-center justify-center">
        <ImageIcon className="w-1/4 h-1/4"></ImageIcon>
      </div>
    </section>
  );
};

export default Classes;
