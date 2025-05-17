import React from "react";

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
      <form className="flex flex-col space-y-2 w-full px-64">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col space-y-2 w-full">
              <label>First name</label>
              <input className="border-solid border-1"></input>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label>Last name</label>
              <input className="border-solid border-1"></input>
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col space-y-2 w-full">
              <label>Email</label>
              <input className="border-solid border-1"></input>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label>Phone number</label>
              <input className="border-solid border-1"></input>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label>Choose a topic</label>
            <select className="border-solid border-1 p-2">
              <option>Select one</option>
              <option>General Inquiry</option>
              <option>Class Registration</option>
              <option>Billing & Membership</option>
              <option>Facility Access </option>
              <option>Feedback</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col space-x-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Which best describes you
            </label>

            <div className="flex flex-wrap justify-between w-full gap-y-4">
              <label className="w-1/3 flex justify-start">
                <input type="radio" name="userType" value="first" />
                <span className="ml-2">Parent of a student</span>
              </label>

              <label className="w-1/3 flex justify-center">
                <input type="radio" name="userType" value="second" />
                <span className="ml-2">Current member</span>
              </label>

              <label className="w-1/3 flex justify-end">
                <input type="radio" name="userType" value="third" />
                <span className="ml-2">First-time visitor</span>
              </label>

              <label className="w-1/3 flex justify-start">
                <input type="radio" name="userType" value="fourth" />
                <span className="ml-2">Local organization</span>
              </label>

              <label className="w-1/3 flex justify-center">
                <input type="radio" name="userType" value="fifth" />
                <span className="ml-2">Coach or trainer</span>
              </label>

              <label className="w-1/3 flex justify-end">
                <input type="radio" name="userType" value="sixth" />
                <span className="ml-2">Just exploring</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label>Message</label>
            <textarea
              placeholder="Type your message..."
              className="h-48 border-solid border-1"
            ></textarea>
            <div className="flex flex-row space-x-2">
              <input type="checkbox" className=""></input>
              <label>I accept the Terms</label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
