import { Image } from "lucide-react";
import Link from "next/link";
import React, { JSX } from "react";

interface BackgroundOverlayProps {
  backgroundIcon: JSX.Element;
  children: React.ReactNode;
  height?: string;
}

const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({
  backgroundIcon,
  children,
  height,
}) => {
  return (
    <section
      className={`w-screen -mx-4 ${height ? "h-" + height : "h-72"} overflow-hidden relative`}
    >
      <div className="absolute w-48 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-20">
        {backgroundIcon}
      </div>

      <div className="absolute inset-0 bg-black opacity-70 z-20" />

      <div className="relative z-30 h-full p-4 flex justify-center flex-col space-y-2 text-white 4 p-16">
        {children}
      </div>
    </section>
  );
};

export default BackgroundOverlay;
