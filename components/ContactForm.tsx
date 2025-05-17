import Link from "next/link";
import React from "react";

interface IRadioOptions {
  option: string;
}

const radioOptions: IRadioOptions[] = [
  { option: "Parent of a student" },
  { option: "Current member" },
  { option: "First-time visitor" },
  { option: "Local organization" },
  { option: "Coach or trainer" },
  { option: "Just exploring" },
];

interface ITopics {
  topic: string;
}

const topics: ITopics[] = [
  { topic: "General Inquiry" },
  { topic: "Class Registration" },
  { topic: "Billing & Membership" },
  { topic: "Facility Access" },
  { topic: "Feedback" },
  { topic: "Other" },
];

const columns = 3;
const perColumn = Math.ceil(radioOptions.length / columns);
const columnedOptions = Array.from({ length: columns }, (_, i) =>
  radioOptions.slice(i * perColumn, i * perColumn + perColumn)
);

const ContactForm = () => {
  return (
    <section className="flex flex-col space-y-8 justify-center items-center mt-20">
      <div className="flex flex-col space-y-2 text-center px-80">
        <p>We're here to help. Let’s connect.</p>
        <h2 className="text-4xl font-black">Get in touch with our team</h2>
        <p>
          Whether you have a question, need help choosing a program, or just
          want to say hello — we’d love to hear from you.
        </p>
      </div>
      <form className="flex flex-col space-y-2 w-full px-64 items-center justify-center">
        <div className="w-full flex flex-col space-y-2">
          <div className="w-full flex flex-row space-x-2">
            <div className="flex flex-col space-y-2 w-full">
              <label>First name</label>
              <input className="form-control"></input>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label>Last name</label>
              <input className="form-control"></input>
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col space-y-2 w-full">
              <label>Email</label>
              <input className="form-control"></input>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label>Phone number</label>
              <input className="form-control"></input>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="topic">Choose a topic</label>
            <select
              id="topic"
              defaultValue=""
              name="topic"
              className="form-control p-2"
            >
              <option disabled value="">
                Select one
              </option>
              {topics.map((label, i) => (
                <option key={i} value={label.topic}>
                  {label.topic}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Which best describes you
            </label>

            <div className="w-full flex justify-between w-full gap-x-6">
              {columnedOptions.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="w-full flex flex-col gap-y-4 w-1/3"
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
            <label>Message</label>
            <textarea
              placeholder="Type your message..."
              className="h-48 form-control"
            ></textarea>
            <label className="custom-checkbox-label">
              <input type="checkbox" name="terms" />
              <span>I accept the Terms</span>
            </label>
          </div>
        </div>
        <Link href="" type="submit" className="btn btn--black btn--positive">
          Send Message
        </Link>
      </form>
    </section>
  );
};

export default ContactForm;
