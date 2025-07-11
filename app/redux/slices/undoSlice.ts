import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UndoState<T> {
  past: T[];
  present: T | null;
  future: T[];
}

const initialState: UndoState<any> = {
  past: [],
  present: null,
  future: [],
};

const undoSlice = createSlice({
  name: "undo",
  initialState,
  reducers: {
    setPresent<T>(state: UndoState<T>, action: PayloadAction<T>) {
      if (state.present !== null) {
        state.past.push(state.present);
      }
      state.present = action.payload;
      state.future = []; // clear future on new action
    },
    undo(state: UndoState<any>) {
      if (state.past.length === 0) return;
      const previous = state.past.pop()!;
      if (state.present !== null) {
        state.future.push(state.present);
      }
      state.present = previous;
    },
    redo(state: UndoState<any>) {
      if (state.future.length === 0) return;
      const next = state.future.pop()!; // pop from end
      if (state.present !== null) {
        state.past.push(state.present);
      }
      state.present = next;
    },
    clearHistory(state: UndoState<any>) {
      state.past = [];
      state.future = [];
    },
  },
});

export const { setPresent, undo, redo, clearHistory } = undoSlice.actions;
export default undoSlice.reducer;
