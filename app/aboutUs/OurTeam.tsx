import { Image, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

interface ITeamMember {
  image: JSX.Element;
  name: string;
  title: string;
  description: string;
}

const Teammembers: ITeamMember[] = [
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
  {
    image: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching",
  },
];

const OurTeam = () => {
  return (
    <section className="grid gap-y-8 place-items-center">
      <div className="grid grid-rows-3 gap-8 place-items-center">
        <span>Together</span>
        <h1 className="text-4xl font-black">Our Team</h1>
        <p>Meet the passionate Individuals behind our succcess</p>
      </div>
      <div className="flex flex-row flex-wrap gap-y-16">
        {Teammembers.map((label, index) => (
          <div className="grid grid-rows w-1/4 place-items-center">
            <div className="grid grid-rows place-items-center gap-4 text-center">
              <div className="bg-gray-200 w-20 h-20  rounded-4xl flex items-center justify-center">
                {label.image}
              </div>
              <div className="">
                <p>{label.name}</p>
                <span>{label.title}</span>
              </div>
              <p>{label.description}</p>
              <div className="flex flex-row space-x-4">
                <Linkedin></Linkedin>
                <X></X>
                <Instagram></Instagram>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-y-4 place-items-center">
        <h2 className="text-3xl font-black">We're Hiring!</h2>
        <p>Join our dynamic team and make a difference</p>
        <Link className="p-2 border-solid border-1" href="#">
          Open Positions
        </Link>
      </div>
    </section>
  );
};

export default OurTeam;
