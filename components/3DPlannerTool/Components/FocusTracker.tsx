"use client";

import React, { useState, useCallback, useRef } from "react";

interface FocusTrackerProps {
  children: React.ReactNode;
  onFocusChange?: (isFocused: boolean) => void;
}

const FocusTracker: React.FC<FocusTrackerProps> = ({
  children,
  onFocusChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFocus = useCallback(() => {
    onFocusChange?.(true);
  }, [onFocusChange]);

  const handleBlur = useCallback(() => {
    onFocusChange?.(false);
  }, [onFocusChange]);

  const handlePointerDown = () => {
    containerRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0} // make div focusable
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPointerDown={handlePointerDown}
      style={{ outline: "none", height: "100%", width: "100%" }}
    >
      {children}
    </div>
  );
};

export default FocusTracker;
