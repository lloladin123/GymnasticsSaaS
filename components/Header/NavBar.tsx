"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface navItems {
  href: string;
  link: string;
}

const navItems: navItems[] = [
  { link: "Home Page", href: "/" },
  { link: "About Us", href: "/aboutUs" },
  { link: "Services", href: "/services" },
  { link: "More Links", href: "#" },
  { link: "3DPlannerTool", href: "/3DPlannerTool" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Burger for mobile only */}
      <button
        className="md:hidden p-2 absolute top-2 right-4 z-50"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={48} /> : <Menu size={48} />}
      </button>

      {/* Desktop nav */}
      <nav
        aria-label="Main navigation"
        className="h-full w-full hidden md:block"
      >
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

      {/* Mobile menu (dropdown) */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden absolute top-full left-0 w-full bg-white border-t z-40"
        >
          <ul className="flex flex-col divide-y">
            {navItems.map((label, index) => (
              <li key={index}>
                <Link
                  href={label.href}
                  onClick={() => setOpen(false)}
                  className="block w-full px-4 py-3 text-center hover:bg-gray-200 transition"
                >
                  {label.link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavBar;
