import { ImageIcon, UserCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const InstructorTeaser = () => {
  return (
    <section className="mt-20 p-10 grid grid-cols-2 place-items-center">
      <div className="flex flex-col space-y-4">
        <UserCircle></UserCircle>
        <h2 className="text-4xl font-black">
          Meet Our Expert Gymnastic Instructors
        </h2>
        <p>
          Our gymnastics Instrucotrs are higly qualified professionals with
          years of experience in coaching atheletes of all ages. They are
          dedicated to fostering a safe and supportive enviorment, ensuring that
          every member reaches their full potential
        </p>
        <div className="flex flex-row space-x-4">
          <Link className="btn btn--ghost-black" href="">
            Learn More
          </Link>
          <Link className="btn btn--arrow" href="">
            Join
          </Link>
        </div>
      </div>
      <div className="w-full h-100 bg-gray-300 flex items-center justify-center">
        <ImageIcon className="w-2/4 h-2/4"></ImageIcon>
      </div>
    </section>
  );
};

export default InstructorTeaser;
