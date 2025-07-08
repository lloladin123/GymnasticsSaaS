"use client";

import React, { useEffect } from "react";

interface KeyboardBlockerProps {
  active: boolean;
  keysToBlock?: string[]; // Optional list of keys to block, default to arrow keys + space + tab
}

const KeyboardBlocker: React.FC<KeyboardBlockerProps> = ({
  active,
  keysToBlock = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Tab", " "], // space is " "
}) => {
  useEffect(() => {
    if (!active) return;

    const handler = (e: KeyboardEvent) => {
      if (keysToBlock.includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, keysToBlock]);

  return null; // no UI
};

export default KeyboardBlocker;
