import Image from "next/image";
import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="#">
        <Image
          className="hover-scale-150 hover:opacity-80"
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
