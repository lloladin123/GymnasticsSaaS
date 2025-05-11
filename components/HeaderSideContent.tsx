import Link from "next/link";
import React from "react";

const HeaderSideContent = () => {
  return (
    <>
      {" "}
      <div className="flex flex-row space-x-4 ml-auto items-center justify-center pr-8">
        <Link href="">Join</Link>
        <Link
          className="bg-gray-900 p-2 text-white hover:bg-gray-700 duration-300 ease-in-out"
          href=""
        >
          Learn
        </Link>
      </div>
    </>
  );
};

export default HeaderSideContent;
