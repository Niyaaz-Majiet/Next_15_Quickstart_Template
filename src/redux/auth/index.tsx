import { AuthState } from "./models";

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN(state: any, action: any) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    LOGOUT(state: any) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
