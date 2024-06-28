import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TAlert {
  open: boolean;
}

const initialState: TAlert = {
  open: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertOpened(state, action: PayloadAction<TAlert>) {
      state.open = action.payload.open;
    },
  },
});

export const { alertOpened } = alertSlice.actions;

export default alertSlice.reducer;
