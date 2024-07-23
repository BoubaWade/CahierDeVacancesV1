import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isSignInForm: boolean;
  user: any;
  isPasswordRecovery: boolean;
};

const initialState: AuthState = {
  isSignInForm: true,
  user: null,
  isPasswordRecovery: false,
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
  },
});

export const { setIsSignInForm, setUser, setIsPasswordRecovery } =
  authSlice.actions;
export default authSlice.reducer;
