"use client";

import React, { useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid, Text, Html } from "@react-three/drei";
import { Mesh, Euler, Vector3 } from "three";

interface Block {
  id: number;
  position: [number, number, number];
  rotation?: [number, number, number];
}

function RotationControls({
  targetRef,
  onRotate,
  degrees,
}: {
  targetRef: React.RefObject<Mesh | null>;
  onRotate: (direction: "left" | "right", amount: number) => void;
  degrees: string;
}) {
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

  useFrame(() => {
    if (targetRef.current) {
      const worldPos = new Vector3();
      targetRef.current.getWorldPosition(worldPos);
      setPosition([worldPos.x, worldPos.y + 0.15, worldPos.z + 1.6]);
    }
  });

  const amount = Math.PI / 36;

  return (
    <Html position={position} center zIndexRange={[10, 0]}>
      <div className="flex flex-col items-center gap-1">
        <div className="flex gap-2">
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("left", amount);
            }}
            className="px-1 py-0.5 text-xs text-white bg-gray-700 rounded shadow"
          >
            <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
              ⤻
            </span>
          </button>
          <button
            onPointerDown={(e) => {
              e.stopPropagation();
              onRotate("right", amount);
            }}
            className="px-1 py-0.5 text-xs text-white bg-gray-700 rounded shadow"
          >
            ⤻
          </button>
        </div>
        <div className="text-xs text-gray-800 mt-1">{degrees}°</div>
      </div>
    </Html>
  );
}

function DraggableBlock({
  id,
  position,
  rotation = [0, 0, 0],
  isDragging,
  onDragStart,
  onDragEnd,
  onDrag,
  onRotate,
}: {
  id: number;
  position: [number, number, number];
  rotation?: [number, number, number];
  isDragging: boolean;
  onDragStart: (id: number) => void;
  onDragEnd: () => void;
  onDrag: (id: number, newPos: [number, number, number]) => void;
  onRotate: (id: number, direction: "left" | "right", amount: number) => void;
}) {
  const ref = useRef<Mesh | null>(null);
  const [blockPos, setBlockPos] = useState(position);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (isDragging) {
      const x = (mouse.x * viewport.width) / 2;
      const z = (-mouse.y * viewport.height) / 2;
      const snappedX = Math.round(x);
      const snappedZ = Math.round(z);
      const newPos: [number, number, number] = [snappedX, 0.1, snappedZ];
      setBlockPos(newPos);
      onDrag(id, newPos);
    }
  });

  const handleRotate = (direction: "left" | "right", amount: number) => {
    onRotate(id, direction, amount);
  };

  const degrees = ((rotation[1] * 180) / Math.PI).toFixed(1);

  return (
    <>
      <group
        ref={ref}
        position={blockPos}
        rotation={new Euler(...rotation)}
        onPointerDown={(e) => {
          e.stopPropagation();
          onDragStart(id);
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          onDragEnd();
        }}
      >
        <mesh castShadow>
          <boxGeometry args={[4, 0.2, 1]} />
          <meshStandardMaterial color="skyblue" />
        </mesh>
        <mesh position={[0, 0.11, 0]}>
          <boxGeometry args={[4, 0.01, 0.05]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.4}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {`Airtrack`}
        </Text>
      </group>

      <RotationControls
        targetRef={ref}
        onRotate={handleRotate}
        degrees={degrees}
      />
    </>
  );
}

function OrbitToggle({ orbitRef }: { orbitRef: React.RefObject<any> }) {
  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.enabled = true;
    }
  });
  return null;
}

export default function App() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const orbitRef = useRef<any>(null);

  const addBlock = () => {
    const newBlock: Block = {
      id: Date.now(),
      position: [0, 0.1, 0],
      rotation: [0, 0, 0],
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  const handleDrag = (id: number, newPos: [number, number, number]) => {
    setBlocks((prev) =>
      prev.map((block) =>
        block.id === id ? { ...block, position: newPos } : block
      )
    );
  };

  const handleRotate = (
    id: number,
    direction: "left" | "right",
    amount: number
  ) => {
    setBlocks((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block;
        const currentY = block.rotation?.[1] || 0;
        const newY =
          direction === "left" ? currentY - amount : currentY + amount;
        return { ...block, rotation: [0, newY, 0] };
      })
    );
  };

  const handlePointerUp = () => {
    setDraggingId(null);
    if (orbitRef.current) orbitRef.current.enabled = true;
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="w-full bg-gray-800 text-white p-2 text-sm">
        Rotation Mode: Use ⤺ or ⤻ front buttons
      </div>
      <div className="flex flex-1">
        <div className="w-56 bg-gray-100 p-4 shadow-md z-10">
          <h3 className="text-lg font-semibold mb-4">Toolbox</h3>
          <button
            onClick={addBlock}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Airtrack
          </button>
        </div>
        <div className="flex-1">
          <Canvas
            shadows
            camera={{ position: [0, 5, 10], fov: 50 }}
            onPointerUp={handlePointerUp}
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
            <Grid args={[20, 20]} cellSize={1} cellThickness={0.5} />
            <OrbitToggle orbitRef={orbitRef} />
            {blocks.map((block) => (
              <DraggableBlock
                key={block.id}
                id={block.id}
                position={block.position}
                rotation={block.rotation}
                isDragging={draggingId === block.id}
                onDragStart={(id) => {
                  setDraggingId(id);
                  if (orbitRef.current) orbitRef.current.enabled = false;
                }}
                onDragEnd={() => {
                  setDraggingId(null);
                  if (orbitRef.current) orbitRef.current.enabled = true;
                }}
                onDrag={handleDrag}
                onRotate={handleRotate}
              />
            ))}
            <OrbitControls ref={orbitRef} makeDefault />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
