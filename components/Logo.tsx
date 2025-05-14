import Image from "next/image";
import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link
        href="#"
        className="bg-red-900 hover:opacity-80 duration-300 ease-in-out"
      >
        <Image
          src="/images/logo-placeholder-image.png"
          width={100}
          height={100}
          alt="Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
