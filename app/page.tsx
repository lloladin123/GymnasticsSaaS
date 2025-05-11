import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";

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

export default function Home() {
  return (
    <>
      <header className="flex flex-row h-20">
        <h1 className="sr-only">Your Brand</h1>
        <div className="Logo w-20 h-full bg-red-900 flex items-center justify-center hover:opacity-80 duration-300 ease-in-out">
          <Logo></Logo>
        </div>
        <nav aria-label="Main navigation" className="h-full w-9/12">
          <ul className="w-full h-full grid [grid-template-columns:repeat(auto-fit,minmax(0,1fr))] gap-2">
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
        <div className="flex flex-row space-x-4 ml-auto items-center justify-center pr-8">
          <Link href="">Join</Link>
          <Link
            className="bg-gray-900 p-2 text-white hover:bg-gray-700 duration-300 ease-in-out"
            href=""
          >
            Learn
          </Link>
        </div>
      </header>
    </>
  );
}
