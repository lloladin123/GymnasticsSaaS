import {
  Activity,
  BookOpen,
  CalendarCheck,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface ServiceCardProps {
  variants: "image" | "icon" | "text-only";
}

const ServiceCard = ({ variants = "image" }: ServiceCardProps) => {
  switch (variants) {
    case "image":
      return (
        <section className="grid p-4 md:p-10 grid-rows-1 md:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <span>Explore</span>
            <h2 className="text-4xl font-black">
              Comprehensive Gymnastics Services for Everyone
            </h2>
            <p>
              Our gymnastics services cater to all ages and skill levels. From
              beginner classes to advanced coaching. we ensure a supportive
              enviroment for growth.
            </p>
            <div className="grid grid-cols-2">
              <div className="flex flex-col space-y-4">
                <span className="font-black">Classes Offered</span>
                <p>
                  Join our diverse range of gymnastics classes for every skill
                  level
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                {" "}
                <span className="font-black">Expert Coaching</span>
                <p>
                  Our certified instructors provide personalized coaching to
                  help you achieve your goals.
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <Link className="btn btn--hover-underline" href="#">
                Learn more
              </Link>
              <Link className="btn btn--arrow" href="#">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ImageIcon className="w-10/12 h-10/12 bg-gray-100"></ImageIcon>
          </div>
        </section>
      );
    case "icon":
      return (
        <section className="grid p-4 md:p-10 grid-rows-1 md:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <Activity></Activity>
            <h2 className="text-4xl font-black">
              Comprehensive Gymnastics Services for Everyone
            </h2>
            <p>
              Our gymnastics services cater to all ages and skill levels. From
              beginner classes to advanced coaching. we ensure a supportive
              enviroment for growth.
            </p>
            <div className="grid grid-cols-2">
              <div className="flex flex-col space-y-4">
                <span className="font-black">Classes Offered</span>
                <p>
                  Join our diverse range of gymnastics classes for every skill
                  level
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                {" "}
                <span className="font-black">Expert Coaching</span>
                <p>
                  Our certified instructors provide personalized coaching to
                  help you achieve your goals.
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <Link className="btn btn--hover-underline" href="#">
                Learn more
              </Link>
              <Link className="btn btn--arrow" href="#">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ImageIcon className="w-10/12 h-10/12 bg-gray-100"></ImageIcon>
          </div>
        </section>
      );
    case "text-only":
      return (
        <section className="flex flex-col space-y-4 p-4">
          <div className="flex flex-col md:flex-row space-x-4">
            <div className="flex flex-col space-y-4">
              <span>Unicycling</span>
              <h2 className="text-4xl font-black">
                Explore Our Exiciting Unicycling Services Today
              </h2>
            </div>
            <div className="flex flex-col space-y-4">
              <p>
                Join our unicycling community and discover a world of fun and
                fitness. We offer a variety of classes and events tailored for
                all skills
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <BookOpen></BookOpen>
                  <h3 className="font-black">Classes Offered</h3>
                  <p>
                    From beginners to advanced, we have classes for everyone
                    interested in unicycling
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <CalendarCheck></CalendarCheck>
                  <h3 className="font-black">Upcoming Events</h3>
                  <p>
                    Participate in our thrilling unicycling event and
                    compettions throughout the year.
                  </p>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <Link className="btn btn--hover-underline" href="#">
                  Learn
                </Link>
                <Link className="btn btn--arrow btn--positive" href="#">
                  Join
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-60 md:h-125 bg-gray-100">
            <ImageIcon className="w-full h-full"></ImageIcon>
          </div>
        </section>
      );
  }
};

export default ServiceCard;
