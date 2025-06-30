import BasicButton from "@/components/Buttons/BasicButton";
import React from "react";

interface ICtaServicesText {
  label: string;
  heading: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

const ctaServicesText: ICtaServicesText = {
  label: "Empower",
  heading: "Explore our Services",
  description:
    "Discover a diverse range of activities designed to inspire and engage every member of our community",
  primaryCta: "Learn More",
  secondaryCta: "Sign Up",
};

const CtaServices = () => {
  return (
    <section className="flex flex-col space-y-8 p-10">
      <span>{ctaServicesText.label}</span>
      <h2 className="text-4xl font-black">{ctaServicesText.heading}</h2>
      <p>{ctaServicesText.description}</p>
      <div className="flex flex-row space-x-4">
        <BasicButton variant="black" href="#">
          {ctaServicesText.primaryCta}
        </BasicButton>
        <BasicButton variant="ghost-black" hoverEffect="positive" href="#">
          {ctaServicesText.secondaryCta}
        </BasicButton>
      </div>
    </section>
  );
};

export default CtaServices;
