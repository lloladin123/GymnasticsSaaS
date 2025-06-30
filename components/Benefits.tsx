import { GraduationCap, Users, Building2 } from "lucide-react";
import ValuePoint from "./ValuePoint";
import { IValuePoint } from "@/Interfaces/IValuePoint";
import BasicButton from "./Buttons/BasicButton";

const benefitText = {
  intro: "Welcome",
  title: "Discover the Benefits of Joining Us",
  description:
    "Join our vibrant community and elevate your skills with our expert instructors. Experience a supportive environment that fosters growth and camaraderie.",
  ctaPrimary: "Join",
  ctaSecondary: "Learn more",
};

const benefitItems: IValuePoint[] = [
  {
    icon: <GraduationCap className="" />,
    header: "Expert Guidance from Professional Instructors",
    description:
      "Our skilled instructors are dedicated to helping you achieve your personal best",
  },
  {
    icon: <Users className="" />,
    header: "Engaging Community Events for Everyone",
    description: "Participate in fun events that bring our members together",
  },
  {
    icon: <Building2 className="" />,
    header: "State-of-the-Art Facilities for All Activities",
    description:
      "Enjoy access to top-notch equipment and spaces tailored for various disciplines",
  },
  {
    icon: <Building2 className="" />,
    header: "Flexible Membership Options",
    description:
      "Choose from a variety of membership plans designed to fit your lifestyle",
  },
  {
    icon: <Building2 className="" />,
    header: "Inclusive Environment for All Ages",
    description: "We welcome individuals of all backgrounds and fitness levels",
  },
];

const Benefits = () => {
  return (
    <section className="mt-4 flex flex-col space-y-2 md:space-y-16 justify-center items-center">
      {/* Intro */}
      <div className="flex flex-col space-y-2 items-center justify-center w-full md:w-7/12 text-center">
        <p>{benefitText.intro}</p>
        <h2 className="text-2xl md:text-4xl font-black">{benefitText.title}</h2>
        <p>{benefitText.description}</p>
      </div>

      {/* Benfit list */}
      <div className="w-full flex flex-row flex-wrap items-start gap-y-2 md:gap-y-8 justify-center">
        {benefitItems.map((item, index) => (
          <ValuePoint key={index} data={item} />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-row items-center justify-center space-x-4">
        <BasicButton hoverEffect="positive" variant="ghost-black" href="#">
          {benefitText.ctaPrimary}
        </BasicButton>
        <BasicButton variant="arrow" href="#">
          {benefitText.ctaSecondary}
        </BasicButton>
      </div>
    </section>
  );
};

export default Benefits;
