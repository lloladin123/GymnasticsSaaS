import React from "react";
import ValuePoint from "./ValuePoint";
import { IValuePoint } from "@/Interfaces/IValuePoint";
import { Activity, Dumbbell, HeartPulse } from "lucide-react";
import Link from "next/link";

const services: IValuePoint[] = [
  {
    icon: <Dumbbell className="" />,
    header: "Gymnastics: Strength, Flexbility, and fun",
    description:
      "Join our gymnastics classes to build strength and coordination while having a blast.",
  },
  {
    icon: <HeartPulse className="" />,
    header: "Senior Fitness: Stay Active and Engaged",
    description:
      "Our senior fitness programs promote health and socical interaction",
  },
  {
    icon: <Activity className="" />,
    header: "Step Aerobics: Energizing Wokrouts for Everyone",
    description:
      "Experience high-energy step aerobics classes designed for all fitness levles.",
  },
];

const Services = () => {
  return (
    <>
      <section className="mt-20 flex flex-col space-y-16 items-start justify-center">
        <div className="flex flex-row justify-between w-full">
          <div className="flex w-4/12 flex-col space-y-4 ">
            <p>Empower</p>
            <h2 className="text-4xl font-black">
              Explore our diverse range of Services
            </h2>
          </div>
          <p className="w-5/12 ml auto">
            From beginner classes to elite training, we offer gymnastics
            programs for all skill levels and age groups. Whether you're looking
            to build strength, flexibility, confidence, or competitive edge —
            our expert coaches and supportive community are here to help you
            thrive.
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          {services.map((label, index) => (
            <ValuePoint key={index} align="left" data={label}></ValuePoint>
          ))}
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <Link href="#" className="btn btn--ghost-black">
            Learn more
          </Link>
          <Link className="btn btn--arrow btn--positive" href="#">
            Sign up
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
