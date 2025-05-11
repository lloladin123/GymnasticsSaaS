import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import HeaderSideContent from "@/components/HeaderSideContent";
import CtaJoin from "@/components/CtaJoin";

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
      <main className="p-4">
        <CtaJoin variants="hero"></CtaJoin>
        <div className="w-full max-h-screen overflow-hidden">
          <video
            width="100%"
            height="auto"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover"
          >
            <source
              src="/videos/rgf_hovedfilm.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            Your browser does not support your video tag.
          </video>
        </div>
      </main>
    </>
  );
}
