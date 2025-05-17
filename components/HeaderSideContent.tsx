import Link from "next/link";
import React from "react";

const HeaderSideContent = () => {
  return (
    <>
      {" "}
      <div className="flex flex-row space-x-4 ml-auto items-center justify-center pr-8">
        <Link className="btn btn--hover-underline" href="">
          Join
        </Link>
        <Link className="btn btn--black" href="">
          Learn
        </Link>
      </div>
    </>
  );
};

export default HeaderSideContent;
