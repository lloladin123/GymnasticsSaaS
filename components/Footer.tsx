import {
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export interface IFooterLink {
  label: string;
  href: string;
}

export interface IFooterSection {
  title: string;
  links: IFooterLink[];
}

export interface ISocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const quickLinks: IFooterLink[] = [
  { label: "Join us", href: "#" },
  { label: "Our Classes", href: "#" },
  { label: "Shop Now", href: "#" },
  { label: "Gallery View", href: "#" },
  { label: "Holiday Fun", href: "#" },
];

export const connectLinks: IFooterLink[] = [
  { label: "Events Page", href: "#" },
  { label: "Instructor Info", href: "#" },
  { label: "Member Portal", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Feedback Form", href: "#" },
];

export const socialLinks: ISocialLink[] = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "X", href: "#", icon: X },
  { label: "Linkedin", href: "#", icon: Linkedin },
  { label: "Youtube", href: "#", icon: Youtube },
];

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-4 p-2 md:p-8">
      <div className="border-solid border-1 flex flex-col md:flex-row space-x-16 p-0 md:p-8 mt-20">
        <div className="flex flex-col w-full md:w-5/12 space-y-2">
          <div className="flex flex-col md:flex-row space-x-2 items-center justify-start">
            <div className="w-20 h-20">
              <Logo />
            </div>
            <p>Brand name</p>
          </div>
          <p className="flex text-center">
            Join a team to stay informed about our latest activities and events.
          </p>
          <div className="flex flex-col md:flex-row p-2 md:p-0 space-x-2">
            <input
              className="form-control p-2 w-full md:w-80"
              placeholder="Your name here"
            />
            <Link href="#" className="btn btn--ghost-black btn--positive">
              Join
            </Link>
          </div>
          <p className="flex text-center md:text-right">
            By joining you agree to our Privacy Policy and consent to receive
            updates.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap flex-row items-center justify-between md:items-start md:justify-start px-8 md:px-0 md:space-x-32">
          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Connect With Us" links={connectLinks} />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-black">Stay Updated</h2>
            <div className="md:mt-4 items-center justify-center flex flex-wrap md:flex-nowrap flex-row md:flex-col space-x-4 md:space-y-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex flex-row space-x-2 md:items-center group"
                >
                  <Icon className="duration-300 group-hover:scale-125" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  md:flex-row justify-between">
        <span className="order-2 md:order-1">
          &copy; 2025 Org name. All rights reserved
        </span>
        <div className="flex flex-row space-x-2 md:space-x-4">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: IFooterLink[];
}) => (
  <div className="flex flex-col space-y-0 md:space-y-2">
    <h2 className="font-black">{title}</h2>
    <ul className="flex flex-col spacce-y-2 md:space-y-4">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
