import Link from "next/link";
import React from "react";
import Image from "next/image";

const CommunityHightligt = () => {
  return (
    <section className="mt-20 flex flex-row space-x-8 justify-start items-start">
      <div className="relative w-6/12 h-128 flex justify-center items-center">
        <Image
          fill
          src="/images/SpringHallen.PNG"
          alt="CommunityHightlight Image"
          className="object-contain"
        ></Image>
      </div>
      <div className="flex flex-col space-y-6 w-6/12 justify-center items-start pt-12 pr-16">
        <p>Building Strength, Confidence, and Community</p>
        <h2 className="text-4xl font-black">
          Join a Thriving Gymnastics Community
        </h2>
        <p>
          With nearly 100 dedicated instructors, we foster a vibrant and
          supportive environment for athletes of all ages. Our events celebrate
          the talent, growth, and achievements of our members — making every
          moment count.
        </p>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl font-black">3000</h3>
            <p>Active members engaged in diverse activities</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-black">100</h2>
            <p>Instructors dedicated to your fintess journey.</p>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center">
          <Link href="#" className="border-solid border-1 p-2">
            Join now
          </Link>
          <Link href="#">Learn more &gt;</Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityHightligt;
