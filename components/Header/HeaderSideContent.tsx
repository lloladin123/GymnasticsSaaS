import Link from "next/link";
import React from "react";
import BasicButton from "../Buttons/BasicButton";

const HeaderSideContent = () => {
  return (
    <>
      <div className="flex flex-row space-x-4 ml-auto items-center justify-center pr-8">
        <BasicButton variant="plain" href="">
          Join
        </BasicButton>
        <BasicButton variant="black" href="">
          Learn
        </BasicButton>
      </div>
    </>
  );
};

export default HeaderSideContent;
