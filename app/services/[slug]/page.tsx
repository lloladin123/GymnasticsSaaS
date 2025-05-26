import React from "react";
import HeroSection from "./HeroSection";
import Overview from "./Overview";
import Classes from "./Classes";
import InstructorTeaser from "./InstructorTeaser";
import Link from "next/link";
import {
  Activity,
  Brain,
  Dumbbell,
  Heart,
  ImageIcon,
  LucideIcon,
} from "lucide-react";
import Testimonial from "@/components/Testimonial";
import CtaJoin from "@/components/CtaJoin";
import ContactForm from "@/components/ContactForm";

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  if (slug === "gymnastics") {
    return (
      <>
        {/* Hero section */}
        <HeroSection></HeroSection>
        {/* Overview with image */}
        <Overview></Overview>
        {/* Class/gallery section */}
        <Classes></Classes>
        {/* Instructor Teaser */}
        <InstructorTeaser></InstructorTeaser>
        {/* Feature card grid */}
        {/* Stats block */}
        {/* Testimonials */}
        {/* FAQ section */}
        {/* CTA banner */}
        {/* Contact section (optional) */}
      </>
    );
  }
  interface SeniorCardProps {
    title: string;
    description: string;
    href: string;
  }
  const SeniorCards: SeniorCardProps[] = [
    {
      title: "Build Strength with Low-Impact Training",
      description:
        "Programs designed to safely improve muscle strength and endurance.",
      href: "",
    },
    {
      title: "Experience Low-Impact Aerobics Designed Specifically for Seniors",
      description:
        "Our low-impact aerobics classes are perfect for improving cardivascular health without strain.",
      href: "",
    },
    {
      title:
        "Strength Training Programs Tailored for Senior Fitness and Mobility",
      description:
        "Build strength safely with our specialized training programs designed for seniors.",
      href: "",
    },
  ];
  if (slug === "seniors") {
    return (
      <>
        <section className="flex flex-col justify-center p-10 space-y-8">
          <span className="">Empower</span>
          <h2 className="text-4xl font-black">Senior Fitness Programs</h2>
          <p className="md:w-160">
            Discover our engaging senior fitness programs designed to enhance
            stregth, flexibility, and overall well-being
          </p>
          <div className="flex flex-row space-x-4">
            <Link className="btn btn--black" href="#">
              Join
            </Link>
            <Link className="btn btn--hover-underline" href="#">
              Learn more
            </Link>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-2 p-10">
          <div className="flex flex-col space-y-4 mt-30">
            <h2 className="text-4xl font-black">
              Unlock Your Potential with our Engaging Senior Fitness Classes
            </h2>
            <p>
              Our senior ftiness classes are designed to enhance mobility and
              strength while fostering a sense of community. Join us for a fun
              and supportive enviorment that promotes health and well-being
            </p>
            <div className="flex flex-row space-x-8">
              <div className="flex flex-col space-y-4">
                <Activity />
                <h3>Enhanced Mobility</h3>
                <p>
                  Experience greater flexibility and movement with our tailored
                  exercises for seniors
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Dumbbell />
                <h3>Strength Building</h3>
                <p>
                  Build muscle strength safely and effectively with our expert
                  guidance and support
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-80 md:h-160 bg-gray-300 flex items-center justify-center">
            <ImageIcon className="w-3/12 h-3/12" />
          </div>
        </section>

        <section className="flex flex-col space-y-8 items-center justify-center p-10">
          <h2 className="text-4xl md:w-8/12 text-center font-black">
            Empowering Seniors Through Tailored Fitness Programs for a Healthier
            Lifestyle
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 items-start">
            {SeniorCards.map((label, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 text-center flex flex-col space-y-4 items-center justify-center"
              >
                <div className="w-full h-40 bg-gray-300 flex justify-center items-center">
                  <ImageIcon className="w-2/12 h-2/12" />
                </div>
                <h3 className="text-2xl font-black">{label.title}</h3>
                <p>{label.description}</p>
                <Link className="btn btn--arrow" href="">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-8 p-10">
          <div className="flex flex-col space-y-8 mt-20">
            <h2 className="text-4xl font-black">
              Unlock Your Potential: the Transformative Power of Senior Fitness
              Programs
            </h2>
            <p>
              Engaging in senior ftiness porgrams significantly enhances
              physical health and mental well-being. Studies show that regular
              exercise can reduce the risk of chronic diesases and improve
              quality of life.
            </p>
            <div className="flex flex-row space-x-8">
              <div className="flex flex-col space-y-4">
                <Heart />
                <h3 className="font-black">Physical Health</h3>
                <p>
                  Regular exercise strengthes muscles, improves balance, and
                  increase flexbility in seniors
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Brain />
                <h3 className="font-black">Mental Wellness</h3>
                <p>
                  Participating in fitness activities boosts mood and reduces
                  symptons of anxiety and depression
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 w-full h-80 md:h-160 flex justify-center items-center">
            <ImageIcon className="w-3/12 h-3/12"></ImageIcon>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 p-10">
          <div className="flex flex-col space-y-8 mt-20">
            <h2 className="text-4xl font-black">
              Empowering Seniors: Transformative Fitness Programs for Enhanced
              Mbolity and Wellbeing
            </h2>
            <p>
              Our senior fitness programs have garnered over 500 active members,
              showcasing their popularity and effectiveness. Participants report
              an average moblity improvement of 40% within just three months
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-8">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-black">500</h3>
                <p>Active senior members enjoying our fitness programs</p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-black">40%</h3>
                <p>Average improvement in mobility reported by participants</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 w-full h-80 md:h-160 flex justify-center items-center">
            <ImageIcon className="w-3/12 h-3/12"></ImageIcon>
          </div>
        </section>
        <Testimonial variants="stacked"></Testimonial>
        <CtaJoin variants="card"></CtaJoin>
        <ContactForm></ContactForm>
      </>
    );
  }
  if (slug === "stepAerobics") {
    return <div>stepAerobics</div>;
  }
};

export default page;
