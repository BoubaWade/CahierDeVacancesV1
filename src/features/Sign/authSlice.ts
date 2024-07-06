import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isSignInForm: boolean;
  user: any;
};

const initialState: AuthState = {
  isSignInForm: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsSignInForm(state, { payload }) {
      state.isSignInForm = payload;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export const { setIsSignInForm, setUser } = authSlice.actions;
export default authSlice.reducer;
