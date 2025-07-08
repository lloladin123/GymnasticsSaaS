// behaviors/duplicatable.ts
import { Block } from "../types";

const Duplicatable = {
  duplicateBlockById: (
    blocks: Block[],
    id: number,
    setBlocks: React.Dispatch<React.SetStateAction<Block[]>>
  ) => {
    const blockToDuplicate = blocks.find((b) => b.id === id);
    if (!blockToDuplicate) return;

    const newBlock: Block = {
      ...blockToDuplicate,
      id: Date.now(),
      position: [
        blockToDuplicate.position[0] + 0.5,
        blockToDuplicate.position[1],
        blockToDuplicate.position[2] + 0.5,
      ],
    };

    setBlocks((prev) => [...prev, newBlock]);
  },
};

export default Duplicatable;
