import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isSignInForm: boolean;
  user: any;
  isPasswordRecovery: boolean;
  isMonthly: boolean;
};

const initialState: AuthState = {
  isSignInForm: true,
  user: null,
  isPasswordRecovery: false,
  isMonthly: true,
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
    setIsPasswordRecovery(state, { payload }) {
      state.isPasswordRecovery = payload;
    },
    setIsMonthly(state, { payload }) {
      state.isMonthly = payload;
    },
  },
});

export const { setIsSignInForm, setUser, setIsPasswordRecovery, setIsMonthly } =
  authSlice.actions;
export default authSlice.reducer;
