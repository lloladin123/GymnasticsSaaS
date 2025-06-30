import Link from "next/link";
import React from "react";
import BasicButton from "./Buttons/BasicButton";

interface IRadioOptions {
  option: string;
}

interface ITopics {
  topic: string;
}

// ✳️ Headings and paragraph text moved to constants
const formText = {
  tagline: "We're here to help. Let’s connect.",
  heading: "Get in touch with our team",
  description:
    "Whether you have a question, need help choosing a program, or just want to say hello — we’d love to hear from you.",
  userTypeLabel: "Which best describes you",
  topicLabel: "Choose a topic",
  topicPlaceholder: "Select one",
  messageLabel: "Message",
  messagePlaceholder: "Type your message...",
  termsLabel: "I accept the Terms",
  buttonText: "Send Message",
};

// ✳️ Select options
const topics: ITopics[] = [
  { topic: "General Inquiry" },
  { topic: "Class Registration" },
  { topic: "Billing & Membership" },
  { topic: "Facility Access" },
  { topic: "Feedback" },
  { topic: "Other" },
];

// ✳️ Radio options
const radioOptions: IRadioOptions[] = [
  { option: "Parent of a student" },
  { option: "Current member" },
  { option: "First-time visitor" },
  { option: "Local organization" },
  { option: "Coach or trainer" },
  { option: "Just exploring" },
];

// ✳️ Organize into columns
const columns = 3;
const perColumn = Math.ceil(radioOptions.length / columns);
const columnedOptions = Array.from({ length: columns }, (_, i) =>
  radioOptions.slice(i * perColumn, i * perColumn + perColumn)
);

const ContactForm = () => {
  return (
    <section className="flex flex-col space-y-8 justify-center items-center mt-10 md:mt-20 p-10">
      <div className="flex flex-col space-y-2 text-center px-0 md:px-80">
        <p>{formText.tagline}</p>
        <h2 className="text-4xl font-black">{formText.heading}</h2>
        <p>{formText.description}</p>
      </div>

      <form className="flex flex-col space-y-2 w-full px-0 md:px-64 items-center justify-center">
        <div className="w-full flex flex-col space-y-2">
          <div className="w-full flex flwex-col md:flex-row space-x-2">
            <div className="flex flex-col space-y-2 w-full">
              <label>First name</label>
              <input className="form-control" />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label>Last name</label>
              <input className="form-control" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-x-2">
            <div className="flex flex-col space-y-2 w-full">
              <label>Email</label>
              <input className="form-control" />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label>Phone number</label>
              <input className="form-control" />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="topic">{formText.topicLabel}</label>
            <select
              id="topic"
              defaultValue=""
              name="topic"
              className="form-control p-2"
            >
              <option disabled value="">
                {formText.topicPlaceholder}
              </option>
              {topics.map((label, i) => (
                <option key={i} value={label.topic}>
                  {label.topic}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full flex flex-col space-y-2 md:space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {formText.userTypeLabel}
            </label>

            <div className="w-full flex flex-col md:flex-row justify-between gap-x-6">
              {columnedOptions.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="w-full flex flex-col gap-0 md:gap-y-4"
                >
                  {column.map((label, i) => (
                    <label
                      key={i}
                      className="custom-radio-label flex items-center justify-start gap-2"
                    >
                      <input type="radio" name="userType" className="" />
                      <span>{label.option}</span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label>{formText.messageLabel}</label>
            <textarea
              placeholder={formText.messagePlaceholder}
              className="h-48 form-control"
            />
            <label className="custom-checkbox-label">
              <input type="checkbox" name="terms" />
              <span>{formText.termsLabel}</span>
            </label>
          </div>
        </div>

        <BasicButton variant="black" hoverEffect="positive" href="#">
          {formText.buttonText}
        </BasicButton>
      </form>
    </section>
  );
};

export default ContactForm;
