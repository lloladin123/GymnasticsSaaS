import Link from "next/link";
import React from "react";
import Image from "next/image";

const CommunityHightligt = () => {
  return (
    <section className="mt-10 md:mt-20 flex flex-col md:flex-row space-y-2 md:space-x-8 justify-start items-start">
      <div className="relative w-full md:w-6/12 h-64 md:h-128 bg-gray-100">
        <Image
          fill
          src="/images/SpringHallen.PNG"
          alt="CommunityHightlight Image"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col space-y-2 md:space-y-6 w-full md:w-6/12 justify-center items-start pt-0 md:pt-12 pr-0 md:pr-16">
        <p>Building Strength, Confidence, and Community</p>
        <h2 className="text-2xl md:text-4xl font-black">
          Join a Thriving Gymnastics Community
        </h2>
        <p>
          With nearly 100 dedicated instructors, we foster a vibrant and
          supportive environment for athletes of all ages. Our events celebrate
          the talent, growth, and achievements of our members — making every
          moment count.
        </p>
        <div className="flex flex-row justify-center items-start">
          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl font-black">3000</h3>
            <p>Active members engaged in diverse activities</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-black">100</h2>
            <p>Instructors dedicated to your fintess journey.</p>
          </div>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <Link href="#" className="btn btn--ghost-black btn--positive">
            Join now
          </Link>
          <Link className="btn btn--arrow" href="#">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityHightligt;
