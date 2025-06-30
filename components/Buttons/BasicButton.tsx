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

type HoverEffect = "positive" | undefined;

interface BasicButtonProps {
  variant: ButtonVariant;
  href: string;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: HoverEffect;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  variant,
  href,
  children,
  className = "",
  hoverEffect,
}) => {
  const getVariantClass = () => {
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

  const classes = [
    getVariantClass(),
    hoverEffect === "positive" ? "btn--positive" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default BasicButton;
