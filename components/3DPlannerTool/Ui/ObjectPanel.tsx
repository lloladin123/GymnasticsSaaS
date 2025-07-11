"use client";

import React, { useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { updateBlockSize } from "@/app/redux/slices/blocksSlice";

const ObjectPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector((state) => state.ui.selectedId);
  const block = useAppSelector((state) =>
    state.blocks.blocks.find((b) => b.id === selectedId)
  );

  const [isOpen, setIsOpen] = useState(true);
  const [isLocked, setIsLocked] = useState(false);

  if (!block) return <div>Select a block</div>;

  const setSize = (index: 0 | 1 | 2, value: number) => {
    if (isLocked) return;
    const newSize = [...(block.size ?? [1, 1, 1])] as [number, number, number];
    newSize[index] = value;
    dispatch(updateBlockSize({ id: block.id, size: newSize }));
  };

  const EditableNumber = ({
    value,
    onChange,
    min,
    max,
    step = 1,
  }: {
    value: number;
    onChange: (v: number) => void;
    min: number;
    max: number;
    step?: number;
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
      let num = parseFloat(tempValue as any);
      if (isNaN(num)) num = value;
      if (num < min) num = min;
      if (num > max) num = max;
      onChange(num);
      setEditing(false);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") finishEditing();
      else if (e.key === "Escape") setEditing(false);
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
          step={step}
          onChange={(e) => setTempValue(parseFloat(e.target.value))}
          onBlur={finishEditing}
          onKeyDown={onKeyDown}
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
    step = 1,
  }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
    min: number;
    max: number;
    step?: number;
  }) => (
    <div className="flex items-center space-x-4 mb-4">
      <label className="w-24 font-medium">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-30"
      />
      <EditableNumber
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );

  return (
    <div className={`relative p-4 ${isOpen ? "h-80" : "h-20"}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Object Controls</h3>
        <div className="flex items-center space-x-3">
          <label className="flex items-center cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isLocked}
              onChange={() => setIsLocked((v) => !v)}
              className="hidden"
              aria-label="Lock Object"
            />
            <span>{isLocked ? "🔒" : "🔓"}</span>
          </label>
          <button
            aria-label={isOpen ? "Collapse panel" : "Expand panel"}
            onClick={() => setIsOpen((v) => !v)}
            className="focus:outline-none"
          >
            {isOpen ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <>
          <h2 className="font-black">--- Work in progress ---</h2>
          <SliderRow
            label="Length"
            value={block.size?.[0] ?? 1}
            onChange={(v) => setSize(0, v)}
            min={0.1}
            max={100}
            step={0.1}
          />
          <SliderRow
            label="Height"
            value={block.size?.[1] ?? 1}
            onChange={(v) => setSize(1, v)}
            min={0.1}
            max={100}
            step={0.1}
          />
          <SliderRow
            label="Width"
            value={block.size?.[2] ?? 1}
            onChange={(v) => setSize(2, v)}
            min={0.1}
            max={100}
            step={0.1}
          />
        </>
      )}
    </div>
  );
};

export default ObjectPanel;
