import Link from "next/link";
import React from "react";

interface CtaJoinProps {
  variants: "hero" | "card" | "footer";
}

const CtaJoin = ({ variants = "hero" }: CtaJoinProps) => {
  return (
    <section className="flex flex-row">
      <h1 className="text-4xl font-black w-5/12 p-10">
        Join Our Thriving Gymnastics Community Today!
      </h1>
      <div className="flex flex-col space-y-4 w-7/12 p-10">
        <p>
          At our gymnastics assciation, we offer a diverse range of activies for
          all ages and skill levels. Whether you're looking to improve your
          gymnastics skills or explore new fitness avenues, we have something
          for everyone.
        </p>
        <div className="flex flex-row space-x-4 items-center">
          <Link
            className="bg-gray-900 p-2 text-white hover:bg-gray-700 duration-300 ease-in-out"
            href="#"
          >
            Join
          </Link>
          <Link href="#">Learn more</Link>
        </div>
      </div>
    </section>
  );
};

export default CtaJoin;
