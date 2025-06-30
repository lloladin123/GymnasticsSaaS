import BackgroundOverlay from "@/components/BackgroundOverlay";
import { Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Discover from "./Discover";
import OurTeam from "./OurTeam";
import Trusted from "./Trusted";
import CtaJoin from "@/components/CtaJoin";

const aboutUs = () => {
  return (
    <>
      <CtaJoin variants="highlight"></CtaJoin>
      <Discover></Discover>
      <OurTeam></OurTeam>
      <Trusted></Trusted>
      <CtaJoin height="92" variants="card"></CtaJoin>
    </>
  );
};

export default aboutUs;
