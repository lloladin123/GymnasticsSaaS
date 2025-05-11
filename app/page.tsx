import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import HeaderSideContent from "@/components/HeaderSideContent";

export default function Home() {
  return (
    <>
      <header className="flex flex-row h-20">
        <h1 className="sr-only">Your Brand</h1>
        <div className="Logo w-20 h-full flex items-center justify-center">
          <Logo></Logo>
        </div>
        <NavBar></NavBar>
        <HeaderSideContent></HeaderSideContent>
      </header>
    </>
  );
}
