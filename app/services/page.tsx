import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col space-y-8 p-10">
      <span>Empower</span>
      <h2 className="text-4xl font-black">Explore our Services</h2>
      <p>
        Discover a diverse range of activities designed to inspire and engage
        every member of our community
      </p>
      <div className="flex flex-row space-x-4">
        <Link className="btn btn--black" href="#">
          Learn More
        </Link>
        <Link className="btn btn--ghost-black" href="#">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default page;
