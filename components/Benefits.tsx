import Link from "next/link";
import React, { JSX } from "react";
import { GraduationCap, Users, Building2 } from "lucide-react";

interface benefitsProp {
  icon: JSX.Element;
  header: string;
  description: string;
}

const benefits: benefitsProp[] = [
  {
    icon: <GraduationCap className="" />,
    header: "Expert guidance from Professional Instructors",
    description:
      "Our skilled Instructors are dedicated to helping you acheive your personal best",
  },
  {
    icon: <Users className="" />,
    header: "Engaging Community Events for Everyone",
    description: "Participate in fun events that bring our members together",
  },
  {
    icon: <Building2 className="" />,
    header: "State-of-the-Art Facilities For all Activities",
    description:
      "Enjoy access to top notch equipment and spaces tailored for various disciplines",
  },
  {
    icon: <Building2 className="" />,
    header: "State-of-the-Art Facilities For all Activities",
    description:
      "Enjoy access to top notch equipment and spaces tailored for various disciplines",
  },
  {
    icon: <Building2 className="" />,
    header: "State-of-the-Art Facilities For all Activities",
    description:
      "Enjoy access to top notch equipment and spaces tailored for various disciplines",
  },
];

const Benefits = () => {
  return (
    <section className="mt-4 flex flex-col space-y-16 justify-center items-center">
      <div className="flex flex-col space-y-2 items-center justify-center w-7/12 text-center">
        <p>Welcome</p>
        <h1 className="text-4xl font-black">
          Discover the benefits of joining Us
        </h1>
        <p>
          Join our vibrant community and elevate your skills with our expert
          instructors. Experience a supportive enviormenet that fosters growth
          and comaraderie
        </p>
      </div>
      <div className="w-full flex flex-row flex-wrap items-start gap-y-8 justify-center">
        {benefits.map((label, index) => (
          <div
            key={index}
            className="w-1/3 flex flex-col justify-center items-center space-y-2 text-center"
          >
            <div className="w-10 h-10">{label.icon}</div>
            <h2 className="text-2xl font-black">{label.header}</h2>
            <p>{label.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center space-x-8">
        <Link className="p-2 border-solid border-1" href="#">
          Join
        </Link>
        <Link href="#">Learn more &gt;</Link>
      </div>
    </section>
  );
};

export default Benefits;
