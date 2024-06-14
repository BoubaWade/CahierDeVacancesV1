import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isSignInForm: boolean;
  user: any;
  userName: string | null;
};

const initialState: AuthState = {
  isSignInForm: true,
  user: null,
  userName: null,
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
    setUserName(state, { payload }: PayloadAction<string | null>) {
      state.userName = payload;
    },
  },
});

export const { setIsSignInForm, setUser, setUserName } = authSlice.actions;
export default authSlice.reducer;
