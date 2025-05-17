import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-4 p-8">
      <div className="border-solid border-1 flex flex-row space-x-16 p-8 mt-20">
        <div className="flex flex-col w-5/12 space-y-2">
          <div className="flex flex-row space-x-2 items-center justify-start">
            <div className="w-20 h-20 ">
              <Logo></Logo>
            </div>
            <p>Brand name</p>
          </div>
          <p>
            Join a team to stay informet about our latest activities and events.
          </p>
          <div className="flex flex-row space-x-2">
            <input
              className="border-solid border-1 p-2 w-80"
              placeholder="Your name here"
            ></input>
            <Link href="#" className="border-solid border-1 p-2">
              Join
            </Link>
          </div>
          <p>
            By joining you agree to our Privacy Policy and consent to recieve
            updates.
          </p>
        </div>
        <div className="flex flex-row space-x-32">
          <div className="flex flex-col space-y-2">
            <h3>Quick Links</h3>
            <ul className="flex flex-col space-y-4">
              <li>Join us</li>
              <li>Our Classes</li>
              <li>Shop Now</li>
              <li>Gallery View</li>
              <li>Holiday Fun</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h3>Connect With Us</h3>
            <ul className="flex flex-col space-y-4">
              <li>Events Page</li>
              <li>Instructor Info</li>
              <li>Member Portal</li>
              <li>Contact Us</li>
              <li>Feedback Form</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <h3>Stay Updated</h3>
            <div className="flex flex-row space-x-2">
              <Facebook></Facebook>
              <p>Facebook</p>
            </div>
            <div className="flex flex-row space-x-2">
              <Instagram></Instagram>
              <p>Instagram</p>
            </div>
            <div className="flex flex-row space-x-2">
              <X></X>
              <p>X</p>
            </div>
            <div className="flex flex-row space-x-2">
              <Linkedin></Linkedin>
              <p>Linkedin</p>
            </div>
            <div className="flex flex-row space-x-2">
              <Youtube></Youtube>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <p>&copy; 2025 Org name. All right reserved</p>
        <div className="flex flex-row space-x-4">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
