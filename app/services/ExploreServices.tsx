import { Hammer, PartyPopper, Sun } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

interface IExploreServices {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: IExploreServices[] = [
  {
    icon: <Sun></Sun>,
    title: "Engaging Holiday Camps for All Ages",
    description:
      "Join us for fun-filled holiday camps that inspire creatvity and skill development.",
  },
  {
    icon: <Hammer></Hammer>,
    title: "Workshops to Enhance Your Gymnastics Skills",
    description:
      "Participate in our workshops led by expert instructors to refine your techniques.",
  },
  {
    icon: <PartyPopper></PartyPopper>,
    title: "Special Events That Bring Community Together",
    description:
      "Don't miss our special events taht foster camaraderie and showcase talent.",
  },
];

const ExploreServices = () => {
  return (
    <section className="flex flex-col space-y-8 items-center justify-center">
      <div className="px-70 flex flex-col space-y-4 items-center justify-center text-center">
        <span>Explore</span>
        <h2 className="text-4xl font-black">
          Discover Our exciting Range of Services
        </h2>
        <p>
          We offer a variety of additional services designed to enhance your
          experience. From holiday camps to specialized workshops, there's
          something for everyone.
        </p>
      </div>
      <div className="text-center flex flex-row flex-wrap">
        {services.map((label, index) => (
          <div
            key={index}
            className="w-1/3 p-4 flex flex-col space-y-2 items-center"
          >
            {label.icon}
            <h3 className="font-black">{label.title}</h3>
            <p>{label.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row space-x-4">
        <Link className="btn btn--hover-underline" href="#">
          Learn more
        </Link>
        <Link className="btn btn--arow btn--positive" href="">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default ExploreServices;
