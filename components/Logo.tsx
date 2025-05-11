import Image from "next/image";
import React from "react";
import LogoImage from "@/images/logo-placeholder-image.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="#" className="hover:opacity-80 duration-300 ease-in-out">
        <Image src={LogoImage} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
