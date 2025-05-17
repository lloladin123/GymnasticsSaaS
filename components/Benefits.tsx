import Link from "next/link";
import { GraduationCap, Users, Building2 } from "lucide-react";
import ValuePoint from "./ValuePoint";
import { IValuePoint } from "@/Interfaces/IValuePoint";

const benefits: IValuePoint[] = [
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
    <section className="mt-4 flex flex-col space-y-2 md:space-y-16 justify-center items-center">
      <div className="flex flex-col space-y-2 items-center justify-center w-full md:w-7/12 text-center">
        <p>Welcome</p>
        <h2 className="text-2xl md:text-4xl font-black">
          Discover the benefits of joining Us
        </h2>
        <p>
          Join our vibrant community and elevate your skills with our expert
          instructors. Experience a supportive enviormenet that fosters growth
          and comaraderie
        </p>
      </div>
      <div className="w-full flex flex-row flex-wrap items-start gap-y-2 md:gap-y-8 justify-center">
        {benefits.map((label, index) => (
          <ValuePoint key={index} data={label} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center space-x-4">
        <Link className="btn btn--ghost-black btn--positive" href="#">
          Join
        </Link>
        <Link className="btn btn--arrow" href="#">
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Benefits;
