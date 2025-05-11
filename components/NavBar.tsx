import Link from "next/link";
import React from "react";

interface navItemsProp {
  link: string;
  href: string;
}

const navItems: navItemsProp[] = [
  { link: "Home Page", href: "#" },
  { link: "About Us", href: "#" },
  { link: "Instructor Info", href: "#" },
  { link: "More Links", href: "#" },
];

const NavBar = () => {
  return (
    <>
      {" "}
      <nav aria-label="Main navigation" className="h-full w-9/12">
        <ul className="w-full h-full grid [grid-template-columns:repeat(auto-fit,minmax(0,1fr))]">
          {navItems.map((label, index) => (
            <li key={index} className="w-full h-full">
              <Link
                className="flex items-center justify-center w-full h-full hover:bg-gray-200 duration-300 ease-in-out"
                href={label.href}
              >
                {label.link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
