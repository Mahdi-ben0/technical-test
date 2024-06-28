import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TAuthState {
  token: string;
  isEmailVerified: boolean;
}

const initialState: TAuthState = {
  token: "",
  isEmailVerified: false,
};

const authSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    tokenSaved(state, action: PayloadAction<TAuthState>) {
      state.token = action.payload.token;
      state.isEmailVerified = action.payload.isEmailVerified;
    },
  },
});

export const { tokenSaved } = authSlice.actions;

export default authSlice.reducer;
