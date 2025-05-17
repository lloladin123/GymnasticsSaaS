import { Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import BackgroundOverlay from "./BackgroundOverlay";

interface CtaJoinProps {
  variants: "hero" | "card" | "footer";
  height?: string;
}

const CtaJoin = ({ variants = "hero", height }: CtaJoinProps) => {
  switch (variants) {
    case "hero":
      return (
        <section className="flex flex-col md:flex-row space-y-2 md:space-y-10">
          <h2 className="text-2xl md:text-4xl font-black w-full md:w-5/12 px-10">
            Join Our Thriving Gymnastics Community Today!
          </h2>
          <div className="flex flex-col space-y-4 w-full md:w-7/12 px-10">
            <p>
              At our gymnastics assciation, we offer a diverse range of activies
              for all ages and skill levels. Whether you&apos;re looking to
              improve your gymnastics skills or explore new fitness avenues, we
              have something for everyone.
            </p>
            <div className="flex flex-row space-x-4 items-center">
              <Link className="btn btn--black btn--positive" href="#">
                Join
              </Link>
              <Link className="btn btn--ghost-black" href="#">
                Learn more
              </Link>
            </div>
          </div>
        </section>
      );
    case "card":
      return (
        <BackgroundOverlay
          height={height}
          backgroundIcon={<ImageIcon className="w-full h-full" />}
        >
          <h2 className="text-4xl">Join us</h2>
          <p>
            Experience the joy of movement with our classes designed for all
            ages and skill levels.
          </p>
          <div className="mt-4 flex flex-row space-x-4">
            <Link href="#" className="btn btn--white btn--positive">
              Sign Up
            </Link>
            <Link href="#" className="btn btn--ghost-white">
              Learn more
            </Link>
          </div>
        </BackgroundOverlay>
      );
    case "footer":
      return <section>hi</section>;
  }
};

export default CtaJoin;
