"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type ButtonVariant =
  | "black"
  | "white"
  | "ghost-white"
  | "ghost-black"
  | "arrow"
  | "plain";

interface BasicButtonProps {
  variant: ButtonVariant;
  href: string; // required now, since it's always a link
  children: React.ReactNode;
  className?: string;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  variant,
  href,
  children,
  className = "",
}) => {
  const getButtonClass = () => {
    switch (variant) {
      case "black":
        return "btn btn--black";
      case "white":
        return "btn btn--white";
      case "ghost-white":
        return "btn btn--ghost-white";
      case "ghost-black":
        return "btn btn--ghost-black";
      case "arrow":
        return "btn btn--arrow inline-flex items-center gap-2";
      case "plain":
        return "btn btn--hover-underline";
      default:
        return "btn";
    }
  };

  const combinedClasses = `${getButtonClass()} ${className}`.trim();

  return (
    <Link href={href} className={combinedClasses}>
      {children}
      {variant === "arrow" && <ChevronRight size={16} />}
    </Link>
  );
};

export default BasicButton;
