import BackgroundOverlay from "@/components/BackgroundOverlay";
import { Image } from "lucide-react";
import Link from "next/link";
import React from "react";
import Discover from "./Discover";
import OurTeam from "./OurTeam";

const aboutUs = () => {
  return (
    <>
      <BackgroundOverlay
        height="92"
        backgroundIcon={<Image className="w-full h-full" />}
      >
        <span>Dedicated to Strength, Grace & Community</span>
        <h1 className="font-black text-4xl">Empowering Movement Together</h1>
        <p>
          Our mission is to inspire and nuture a love for gymnastic and diverse
          physical activies
        </p>
        <div className="flex flex-row space-x-2">
          <Link className="bg-white p-2 text-black" href="#">
            Join
          </Link>
          <Link className="border-solid border-1 border-white p-2" href="#">
            Explore
          </Link>
        </div>
      </BackgroundOverlay>
      <Discover></Discover>
      <OurTeam></OurTeam>
    </>
  );
};

export default aboutUs;
