import React from "react";
import ValuePoint from "./ValuePoint";
import { IValuePoint } from "@/Interfaces/IValuePoint";
import { Activity, Dumbbell, HeartPulse } from "lucide-react";
import BasicButton from "./Buttons/BasicButton";

const services: IValuePoint[] = [
  {
    icon: <Dumbbell className="" />,
    header: "Gymnastics: Strength, Flexibility, and Fun",
    description:
      "Join our gymnastics classes to build strength and coordination while having a blast.",
  },
  {
    icon: <HeartPulse className="" />,
    header: "Senior Fitness: Stay Active and Engaged",
    description:
      "Our senior fitness programs promote health and social interaction.",
  },
  {
    icon: <Activity className="" />,
    header: "Step Aerobics: Energizing Workouts for Everyone",
    description:
      "Experience high-energy step aerobics classes designed for all fitness levels.",
  },
];

const servicesText = {
  label: "Empower",
  heading: "Explore our diverse range of Services",
  description:
    "From beginner classes to elite training, we offer gymnastics programs for all skill levels and age groups. Whether you're looking to build strength, flexibility, confidence, or competitive edge — our expert coaches and supportive community are here to help you thrive.",
  primaryLabel: "Learn more",
  primaryHref: "#",
  secondaryLabel: "Sign Up",
  secondaryHref: "#",
};

const Services = () => {
  return (
    <section className="mt-10 md:mt-20 flex flex-col space-y-2 md:space-y-16 items-start justify-center">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex w-full md:w-4/12 flex-col space-y-4">
          <p>{servicesText.label}</p>
          <h2 className="text-4xl font-black">{servicesText.heading}</h2>
        </div>
        <p className="w-full md:w-5/12 ml-auto">{servicesText.description}</p>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
        {services.map((label, index) => (
          <ValuePoint key={index} align="left" data={label} />
        ))}
      </div>

      <div className="flex flex-row space-x-4 items-center justify-center">
        <BasicButton variant="ghost-black" href={servicesText.primaryHref}>
          {servicesText.primaryLabel}
        </BasicButton>
        <BasicButton
          variant="arrow"
          hoverEffect="positive"
          href={servicesText.secondaryHref}
        >
          {servicesText.secondaryLabel}
        </BasicButton>
      </div>
    </section>
  );
};

export default Services;
