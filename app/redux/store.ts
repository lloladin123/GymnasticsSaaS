import { configureStore } from "@reduxjs/toolkit";
import blocksReducer from "./slices/blocksSlice";
import uiReducer from "./slices/uiSlice";
import undoReducer from "./slices/undoSlice";

export const store = configureStore({
  reducer: {
    blocks: blocksReducer,
    ui: uiReducer,
    undo: undoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
