import BackgroundOverlay from "@/components/BackgroundOverlay";
import { Image } from "lucide-react";
import Link from "next/link";
import React from "react";
import Discover from "./Discover";
import OurTeam from "./OurTeam";
import Trusted from "./Trusted";
import CtaJoin from "@/components/CtaJoin";

const aboutUs = () => {
  return (
    <>
      <BackgroundOverlay
        height="92"
        backgroundIcon={<Image className="w-full h-full" />}
      >
        <span>Dedicated to Strength, Grace & Community</span>
        <h1 className="font-black text-3xl md:text-4xl">
          Empowering Movement Together
        </h1>
        <p>
          Our mission is to inspire and nuture a love for gymnastic and diverse
          physical activies
        </p>
        <div className="flex flex-row space-x-2">
          <Link className="btn btn--white btn--positive" href="#">
            Join
          </Link>
          <Link className="btn btn--ghost-white" href="#">
            Explore
          </Link>
        </div>
      </BackgroundOverlay>
      <Discover></Discover>
      <OurTeam></OurTeam>
      <Trusted></Trusted>
      <CtaJoin height="92" variants="card"></CtaJoin>
    </>
  );
};

export default aboutUs;
