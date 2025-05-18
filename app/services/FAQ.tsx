import Link from "next/link";
import React from "react";

interface IFQA {
  question: string;
  answer: string;
}

const FQAs: IFQA[] = [
  {
    question: "What are class scheldules?",
    answer:
      "Our class scheldules vary by program and age group. You can find the complete scheldule on our website. We update it regularly to accommodate all members",
  },
  {
    question: "What are class scheldules?",
    answer:
      "Our class scheldules vary by program and age group. You can find the complete scheldule on our website. We update it regularly to accommodate all members",
  },
  {
    question: "What are class scheldules?",
    answer:
      "Our class scheldules vary by program and age group. You can find the complete scheldule on our website. We update it regularly to accommodate all members",
  },
  {
    question: "What are class scheldules?",
    answer:
      "Our class scheldules vary by program and age group. You can find the complete scheldule on our website. We update it regularly to accommodate all members",
  },
  {
    question: "What are class scheldules?",
    answer:
      "Our class scheldules vary by program and age group. You can find the complete scheldule on our website. We update it regularly to accommodate all members",
  },
];

const FAQ = () => {
  return (
    <section className="flex flex-col space-y-8 items-center justify-center px-70">
      <h2 className="text-4xl font-black">FAQs</h2>
      <span>
        Find answers to your questions about our classes, memberships, and
        instrucotr qualifcations.
      </span>
      {FQAs.map((label, index) => (
        <div>
          <div>
            <h3 className="font-black">{label.question}</h3>
            <p>{label.answer}</p>
          </div>
        </div>
      ))}
      <div className="flex flex-col space-y-4 items-center justify-center">
        <h2 className="text-2xl font-black">Still have questions?</h2>
        <span>We're here to help you!</span>
        <Link className="btn btn--hover-underline" href="">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default FAQ;
