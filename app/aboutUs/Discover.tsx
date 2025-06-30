import React from "react";

// 📦 Extracted static content
const discoverContent = {
  heading:
    "Discover Our Journey: From Humble beginnings to a Thriving Community",
  body: `Founded over two decades ago, our association began with a small group of passionate gymnasts. 
  Through dedication and community support, we have grown to serve nearly 3,000 active members, 
  offering a diverse range of activities beyond gymnastics, including senior fitness and unicycling. 
  Our commitment to excellence and inclusivity has made us a cornerstone of the local sports community.`,
};

const Discover = () => {
  return (
    <section className="grid md:grid-cols-2 p-2 md:p-20 md:gap-28">
      <h1 className="text-3xl md:text-4xl font-black">
        {discoverContent.heading}
      </h1>
      <p>{discoverContent.body}</p>
    </section>
  );
};

export default Discover;
