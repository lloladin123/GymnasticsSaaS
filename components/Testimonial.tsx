import { Image, ImageDown, Star, User2 } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <section className="flex flex-col p-0 mt-10 md:mt-0 md:py-20 md:px-70 space-y-4 justify-center items-center">
      <div className="flex flex-row">
        <Star className="w-8 h-8"></Star>
        <Star className="w-8 h-8"></Star>
        <Star className="w-8 h-8"></Star>
        <Star className="w-8 h-8"></Star>
        <Star className="w-8 h-8"></Star>
      </div>
      <p className="font-black text-center">
        "Joining this gym ahs been life-changing for me. The support and
        encouragement are unmatched"!!!!
      </p>
      <div className="flex flex-row space-x-2 justify-center items-center">
        <div className="flex flex-row space-x-2 justify-center items-center">
          <div className="w-16 h-16 flex justify-center items-center bg-gray-300 rounded-4xl">
            <Image className="w-8 h-8"></Image>
          </div>
          <div className="flex flex-col space-y-1 ">
            <p>Emily Johnson</p>
            <p>Member, Fitness Enthusiast</p>
          </div>
        </div>
        <div className="h-12 flex flex-row space-x-1 justify-center items-center">
          <User2></User2>
          <p>Brand name</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
