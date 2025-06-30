import { Image as ImageIcon, Star, StarOff, User2 } from "lucide-react";
import React from "react";

interface TestimonialsProps {
  variants?: "stacked" | "unstacked";
}

const testimonialData = {
  rating: 4,
  quote:
    '"Joining this gym has been life-changing for me. The support and encouragement are unmatched."',
  author: {
    name: "Emily Johnson",
    title: "Member, Fitness Enthusiast",
    avatar: <ImageIcon className="w-8 h-8" />,
  },
  brand: {
    name: "Brand name",
    icon: <User2 />,
  },
};

const renderStars = (rating: number) => {
  const totalStars = 5;
  return Array.from({ length: totalStars }, (_, i) =>
    i < rating ? (
      <Star key={i} className="w-8 h-8 text-yellow-400" />
    ) : (
      <StarOff key={i} className="w-8 h-8 text-gray-300" />
    )
  );
};

const Testimonial = ({ variants = "stacked" }: TestimonialsProps) => {
  const { rating, quote, author, brand } = testimonialData;

  return (
    <section className="flex flex-col p-0 mt-10 md:mt-0 md:py-20 md:px-70 space-y-4 justify-center items-center">
      <div className="flex flex-row">{renderStars(rating)}</div>

      <p className="font-black text-center">{quote}</p>

      <div className="flex flex-row space-x-4 justify-center items-center">
        <div className="flex flex-row space-x-2 items-center">
          <div className="w-16 h-16 flex justify-center items-center bg-gray-300 rounded-4xl">
            {author.avatar}
          </div>
          <div className="flex flex-col space-y-1">
            <p>{author.name}</p>
            <p>{author.title}</p>
          </div>
        </div>

        <div className="h-12 flex flex-row space-x-1 justify-center items-center">
          {brand.icon}
          <p>{brand.name}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
