// blocksSlice.ts

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Block } from "@/components/3DPlannerTool/types";

interface BlocksState {
  blocks: Block[];
}

const initialState: BlocksState = {
  blocks: [],
};

// Thunk to duplicate block by ID
export const duplicateBlockById = createAsyncThunk<
  number, // return new block id
  number, // payload: id to duplicate
  { state: RootState }
>("blocks/duplicateBlockById", (idToDuplicate, { dispatch, getState }) => {
  const state = getState();
  const blockToDuplicate = state.blocks.blocks.find(
    (b) => b.id === idToDuplicate
  );
  if (!blockToDuplicate) throw new Error("Block to duplicate not found");

  const newBlock: Block = {
    ...blockToDuplicate,
    id: Date.now(),
    position: [
      blockToDuplicate.position[0] + 0.5,
      blockToDuplicate.position[1],
      blockToDuplicate.position[2] + 0.5,
    ],
  };

  dispatch(duplicateBlock(newBlock));
  return newBlock.id;
});

const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlock(state, action: PayloadAction<Block>) {
      state.blocks.push(action.payload);
    },
    updateBlockPosition(
      state,
      action: PayloadAction<{ id: number; position: [number, number, number] }>
    ) {
      const block = state.blocks.find((b) => b.id === action.payload.id);
      if (block) {
        block.position = action.payload.position;
      }
    },
    updateBlockRotation(
      state,
      action: PayloadAction<{ id: number; rotation: [number, number, number] }>
    ) {
      const block = state.blocks.find((b) => b.id === action.payload.id);
      if (block) {
        block.rotation = action.payload.rotation;
      }
    },
    updateBlockSize(
      state,
      action: PayloadAction<{ id: number; size: [number, number, number] }>
    ) {
      const block = state.blocks.find((b) => b.id === action.payload.id);
      if (block) {
        block.size = action.payload.size;
      }
    },
    duplicateBlock(state, action: PayloadAction<Block>) {
      state.blocks.push(action.payload);
    },
    deleteBlock(state, action: PayloadAction<number>) {
      state.blocks = state.blocks.filter((b) => b.id !== action.payload);
    },
    // NEW reducer to replace whole blocks array (used by Undoable)
    setBlocks(state, action: PayloadAction<Block[]>) {
      state.blocks = action.payload;
    },
  },
});

export const {
  addBlock,
  updateBlockPosition,
  updateBlockRotation,
  updateBlockSize,
  duplicateBlock,
  deleteBlock,
  setBlocks, // make sure to export it
} = blocksSlice.actions;

export default blocksSlice.reducer;
