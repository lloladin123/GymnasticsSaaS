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
            <div className="w-20 h-20">
              <Logo />
            </div>
            <p>Brand name</p>
          </div>
          <p>
            Join a team to stay informed about our latest activities and events.
          </p>
          <div className="flex flex-row space-x-2">
            <input
              className="form-control p-2 w-80"
              placeholder="Your name here"
            />
            <Link href="#" className="btn btn--ghost-black btn--positive">
              Join
            </Link>
          </div>
          <p>
            By joining you agree to our Privacy Policy and consent to receive
            updates.
          </p>
        </div>

        <div className="flex flex-row space-x-32">
          <div className="flex flex-col space-y-2">
            <h2>Quick Links</h2>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="#">Join us</Link>
              </li>
              <li>
                <Link href="#">Our Classes</Link>
              </li>
              <li>
                <Link href="#">Shop Now</Link>
              </li>
              <li>
                <Link href="#">Gallery View</Link>
              </li>
              <li>
                <Link href="#">Holiday Fun</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <h2>Connect With Us</h2>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="#">Events Page</Link>
              </li>
              <li>
                <Link href="#">Instructor Info</Link>
              </li>
              <li>
                <Link href="#">Member Portal</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Feedback Form</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <h2>Stay Updated</h2>

            <Link
              href="#"
              className="flex flex-row space-x-2 items-center group"
            >
              <Facebook className="duration-300 group-hover:scale-125" />
              <span>Facebook</span>
            </Link>

            <Link
              href="#"
              className="flex flex-row space-x-2 items-center group"
            >
              <Instagram className="duration-300 group-hover:scale-125" />
              <span>Instagram</span>
            </Link>

            <Link
              href="#"
              className="flex flex-row space-x-2 items-center group"
            >
              <X className="duration-300 group-hover:scale-125" />
              <span>X</span>
            </Link>

            <Link
              href="#"
              className="flex flex-row space-x-2 items-center group"
            >
              <Linkedin className="duration-300 group-hover:scale-125" />
              <span>Linkedin</span>
            </Link>

            <Link
              href="#"
              className="flex flex-row space-x-2 items-center group"
            >
              <Youtube className="duration-300 group-hover:scale-125" />
              <span>Youtube</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <p>&copy; 2025 Org name. All rights reserved</p>
        <div className="flex flex-row space-x-4">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
