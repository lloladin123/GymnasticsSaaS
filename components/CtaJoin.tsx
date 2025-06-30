import { Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import BackgroundOverlay from "./BackgroundOverlay";
import BasicButton from "./Buttons/BasicButton";

interface CtaJoinProps {
  variants: "hero" | "card" | "footer" | "highlight";
  height?: string;
  overrideContent?: Partial<CtaContent>;
}

interface CtaContent {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

// Static content blocks
const ctaHeroContent: CtaContent = {
  heading: "Join Our Thriving Gymnastics Community Today!",
  body: "At our gymnastics association, we offer a diverse range of activities for all ages and skill levels. Whether you're looking to improve your gymnastics skills or explore new fitness avenues, we have something for everyone.",
  primaryLabel: "Join",
  primaryHref: "#",
  secondaryLabel: "Learn more",
  secondaryHref: "#",
};

const ctaCardContent: CtaContent = {
  heading: "Join us",
  body: "Experience the joy of movement with our classes designed for all ages and skill levels.",
  primaryLabel: "Sign Up",
  primaryHref: "#",
  secondaryLabel: "Learn more",
  secondaryHref: "#",
};

const ctaHighlightContent: CtaContent = {
  heading: "Empowering Movement Together",
  body: "Our mission is to inspire and nurture a love for gymnastics and diverse physical activities.",
  primaryLabel: "Join",
  primaryHref: "#",
  secondaryLabel: "Explore",
  secondaryHref: "#",
};

const CtaJoin = ({
  variants = "hero",
  height,
  overrideContent,
}: CtaJoinProps) => {
  let content: CtaContent;

  switch (variants) {
    case "hero":
      content = { ...ctaHeroContent, ...overrideContent };
      return (
        <section className="flex flex-col md:flex-row space-y-2 md:space-y-10">
          <h2 className="text-2xl md:text-4xl font-black w-full md:w-5/12 px-10">
            {content.heading}
          </h2>
          <div className="flex flex-col space-y-4 w-full md:w-7/12 px-10">
            <p>{content.body}</p>
            <div className="flex flex-row space-x-4 items-center">
              <BasicButton
                variant="black"
                href={content.primaryHref}
                hoverEffect="positive"
              >
                {content.primaryLabel}
              </BasicButton>
              <BasicButton variant="ghost-black" href={content.secondaryHref}>
                {content.secondaryLabel}
              </BasicButton>
            </div>
          </div>
        </section>
      );

    case "card":
      content = { ...ctaCardContent, ...overrideContent };
      return (
        <BackgroundOverlay
          height={height}
          backgroundIcon={<ImageIcon className="w-full h-full" />}
        >
          <h2 className="text-4xl">{content.heading}</h2>
          <p>{content.body}</p>
          <div className="mt-4 flex flex-row space-x-4">
            <BasicButton
              variant="white"
              hoverEffect="positive"
              href={content.primaryHref}
            >
              {content.primaryLabel}
            </BasicButton>
            <BasicButton variant="ghost-white" href={content.secondaryHref}>
              {content.secondaryLabel}
            </BasicButton>
          </div>
        </BackgroundOverlay>
      );

    case "highlight":
      content = { ...ctaHighlightContent, ...overrideContent };
      return (
        <BackgroundOverlay
          height={height || "92"}
          backgroundIcon={<ImageIcon className="w-full h-full" />}
        >
          <span>Dedicated to Strength, Grace & Community</span>
          <h1 className="font-black text-3xl md:text-4xl">{content.heading}</h1>
          <p>{content.body}</p>
          <div className="flex flex-row space-x-2">
            <BasicButton
              variant="white"
              hoverEffect="positive"
              href={content.primaryHref}
            >
              {content.primaryLabel}
            </BasicButton>
            <BasicButton variant="ghost-white" href={content.secondaryHref}>
              {content.secondaryLabel}
            </BasicButton>
          </div>
        </BackgroundOverlay>
      );

    case "footer":
      return <section>Footer CTA placeholder</section>;
  }
};

export default CtaJoin;
