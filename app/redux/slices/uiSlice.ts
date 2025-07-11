import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  selectedId: number | null;
  draggingId: number | null;
  orbitEnabled: boolean;
}

const initialState: UIState = {
  selectedId: null,
  draggingId: null,
  orbitEnabled: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSelectedId(state, action: PayloadAction<number | null>) {
      state.selectedId = action.payload;
    },
    setDraggingId(state, action: PayloadAction<number | null>) {
      state.draggingId = action.payload;
    },
    setOrbitEnabled(state, action: PayloadAction<boolean>) {
      state.orbitEnabled = action.payload;
    },
  },
});

export const { setSelectedId, setDraggingId, setOrbitEnabled } =
  uiSlice.actions;
export default uiSlice.reducer;
