import Link from "next/link";
import React from "react";

const FreeClassCard = () => {
  return (
    <section className="mt-10 grid grid-cols-2 p-10">
      <div className="flex flex-col space-y-4">
        <h2 className="text-2xl font-black">Join Us for a Free Class!</h2>
        <p>Experience the joy of movement with us today!</p>
      </div>
      <div className="flex items-end justify-end">
        <Link className="btn btn--black" href="#">
          SignUp
        </Link>
        <Link className="btn btn--hover-underline" href="#">
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default FreeClassCard;
