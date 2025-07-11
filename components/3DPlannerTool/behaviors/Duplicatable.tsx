"use client";

import { AppDispatch } from "@/app/redux/store";
import { duplicateBlockById } from "@/app/redux/slices/blocksSlice";

const Duplicatable = {
  duplicateBlockById: (id: number, dispatch: AppDispatch) => {
    dispatch(duplicateBlockById(id));
  },
};

export default Duplicatable;
