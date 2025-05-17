import Image from "next/image";
import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Image
        className=""
        src="/images/logo-placeholder-image.png"
        width={100}
        height={100}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
