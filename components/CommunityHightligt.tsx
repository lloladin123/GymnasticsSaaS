import React from "react";
import Image from "next/image";
import BasicButton from "./Buttons/BasicButton";

const communityText = {
  image: {
    src: "/images/springhallen.png",
    alt: "Community Highlight Image",
  },
  label: "Building Strength, Confidence, and Community",
  heading: "Join a Thriving Gymnastics Community",
  description:
    "With nearly 100 dedicated instructors, we foster a vibrant and supportive environment for athletes of all ages. Our events celebrate the talent, growth, and achievements of our members — making every moment count.",
  stats: [
    {
      value: "3000",
      label: "Active members engaged in diverse activities",
    },
    {
      value: "100",
      label: "Instructors dedicated to your fitness journey.",
    },
  ],
  primaryButton: {
    label: "Join now",
    href: "#",
    variant: "ghost-black",
    hoverEffect: "positive",
  },
  secondaryButton: {
    label: "Learn more",
    href: "#",
    variant: "arrow",
  },
};

const CommunityHightligt = () => {
  return (
    <section className="mt-10 md:mt-20 flex flex-col md:flex-row space-y-2 md:space-x-8 justify-start items-start">
      {/* Image */}
      <div className="relative w-full md:w-6/12 h-64 md:h-128">
        <Image
          fill
          src={communityText.image.src}
          alt={communityText.image.alt}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-2 md:space-y-6 w-full md:w-6/12 justify-center items-start pt-0 md:pt-12 pr-0 md:pr-16">
        {/* Intro */}
        <div className="flex flex-col space-y-2">
          <p>{communityText.label}</p>
          <h2 className="text-2xl md:text-4xl font-black">
            {communityText.heading}
          </h2>
          <p>{communityText.description}</p>
        </div>
        {/* Stats */}
        <div className="flex flex-row justify-center items-start">
          {communityText.stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-4 mr-8">
              <h3 className="text-3xl font-black">{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex flex-row space-x-2 items-center">
          <BasicButton
            variant={communityText.primaryButton.variant as any}
            hoverEffect={communityText.primaryButton.hoverEffect as any}
            href={communityText.primaryButton.href}
          >
            {communityText.primaryButton.label}
          </BasicButton>
          <BasicButton
            variant={communityText.secondaryButton.variant as any}
            href={communityText.secondaryButton.href}
          >
            {communityText.secondaryButton.label}
          </BasicButton>
        </div>
      </div>
    </section>
  );
};

export default CommunityHightligt;
