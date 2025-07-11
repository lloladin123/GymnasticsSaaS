"use client";

import React, { useState, useRef } from "react";

interface ObjectPanelProps {
  // future props here
}

const ObjectPanel: React.FC<ObjectPanelProps> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLocked, setIsLocked] = useState(false);

  const [radius, setRadius] = useState(5);
  const [steps, setSteps] = useState(10);
  const [length, setLength] = useState(20);
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(10);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const toggleLock = () => setIsLocked((prev) => !prev);

  const EditableNumber = ({
    value,
    onChange,
    min,
    max,
  }: {
    value: number;
    onChange: (v: number) => void;
    min: number;
    max: number;
  }) => {
    const [editing, setEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    const startEditing = () => {
      setTempValue(value);
      setEditing(true);
      setTimeout(() => inputRef.current?.focus(), 0);
    };

    const finishEditing = () => {
      let num = Number(tempValue);
      if (isNaN(num)) num = value;
      if (num < min) num = min;
      if (num > max) num = max;
      onChange(num);
      setEditing(false);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        finishEditing();
      } else if (e.key === "Escape") {
        setEditing(false);
      }
    };

    if (editing) {
      return (
        <input
          ref={inputRef}
          type="number"
          className="w-12 text-right font-mono border border-gray-300 rounded px-1"
          value={tempValue}
          min={min}
          max={max}
          onChange={(e) => setTempValue(Number(e.target.value))}
          onBlur={finishEditing}
          onKeyDown={onKeyDown}
          step={1}
        />
      );
    }

    return (
      <span
        onClick={startEditing}
        className="w-12 text-right font-mono cursor-pointer select-none"
        title="Click to edit"
      >
        {value}
      </span>
    );
  };

  const SliderRow = ({
    label,
    value,
    onChange,
    min,
    max,
  }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
    min: number;
    max: number;
  }) => (
    <div className="flex items-center space-x-4 mb-4">
      <label className="w-24 font-medium">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        onInput={(e) => onChange(Number((e.target as HTMLInputElement).value))}
        className="w-30"
      />
      <EditableNumber value={value} onChange={onChange} min={min} max={max} />
    </div>
  );

  return (
    <div className={`relative p-4 ${isOpen ? "h-80" : "h-20"}`}>
      {/* Title bar with toggle and lock */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Object Controls</h3>

        <div className="flex items-center space-x-3">
          {/* Lock toggle */}
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isLocked}
              onChange={toggleLock}
              className="hidden"
              aria-label="Lock Object"
            />
            <span>{isLocked ? "🔒" : "🔓"}</span>
          </label>

          {/* Open/close toggle */}
          <button
            aria-label={isOpen ? "Collapse panel" : "Expand panel"}
            onClick={toggleOpen}
            className="focus:outline-none"
          >
            {isOpen ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {/* Content, toggled */}
      {isOpen && (
        <>
          <h2 className="font-black">--- Work in progress ---</h2>
          <SliderRow
            label="Length"
            value={length}
            onChange={setLength}
            min={1}
            max={100}
          />
          <SliderRow
            label="Width"
            value={width}
            onChange={setWidth}
            min={1}
            max={100}
          />
          <SliderRow
            label="Height"
            value={height}
            onChange={setHeight}
            min={1}
            max={100}
          />
        </>
      )}
    </div>
  );
};

export default ObjectPanel;
