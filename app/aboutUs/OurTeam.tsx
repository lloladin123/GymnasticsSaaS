import { Image, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

interface ITeamMember {
  icon: JSX.Element;
  name: string;
  title: string;
  description: string;
}

const Teammembers: ITeamMember[] = [
  {
    icon: <Image />,
    name: "John Doe",
    title: "Head Coach",
    description: "With over 10 years of experience in gymnastics coaching.",
  },
  {
    icon: <Image />,
    name: "Jane Smith",
    title: "Fitness Instructor",
    description:
      "Specializing in senior fitness and adaptive training programs.",
  },
  {
    icon: <Image />,
    name: "Mark Johnson",
    title: "Cycling Coach",
    description: "Expert in uni cycling with a passion for teaching.",
  },
  {
    icon: <Image />,
    name: "Emily Davis",
    title: "Step Instructor",
    description: "Bringing energy and enthusiasm to every step class.",
  },
  {
    icon: <Image />,
    name: "Michael Brown",
    title: "Gymnastics Coach",
    description: "Dedicated to nurturing young talent in gymnastics.",
  },
  {
    icon: <Image />,
    name: "Sarah Wilson",
    title: "Wellness Coach",
    description: "Focused on holistic health and wellness for all ages.",
  },
  {
    icon: <Image />,
    name: "Laura Taylor",
    title: "Youth Instructor",
    description: "Passionate about inspring the next generation of atheletes",
  },
  {
    icon: <Image />,
    name: "Chris Lee",
    title: "Training Coordinator",
    description:
      "Ensuring our programs meet the highest standard of excellence",
  },
];

const OurTeam = () => {
  return (
    <section className="grid gap-y-2 md:gap-y-8 place-items-center">
      <div className="grid md:grid-rows-3 gap-8 place-items-center">
        <span>Together</span>
        <h1 className="text-4xl font-black">Our Team</h1>
        <p>Meet the passionate Individuals behind our succcess</p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-y-8 md:gap-y-16">
        {Teammembers.map((label, index) => (
          <div
            key={index}
            className="grid grid-rows w-full md:w-1/4 place-items-center"
          >
            <div className="grid grid-rows place-items-center gap-4 text-center">
              <div className="bg-gray-200 w-20 h-20  rounded-4xl flex items-center justify-center">
                {label.icon}
              </div>
              <div className="">
                <p>{label.name}</p>
                <span>{label.title}</span>
              </div>
              <p>{label.description}</p>
              <div className="flex flex-row space-x-4">
                <Linkedin className="hover-scale-150"></Linkedin>
                <X className="hover-scale-150"></X>
                <Instagram className="hover-scale-150"></Instagram>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-y-4 place-items-center">
        <h2 className="text-3xl font-black">We&apos;re Hiring!</h2>
        <p>Join our dynamic team and make a difference</p>
        <Link className="btn btn--ghost-black btn--positive" href="#">
          Open Positions
        </Link>
      </div>
    </section>
  );
};

export default OurTeam;
