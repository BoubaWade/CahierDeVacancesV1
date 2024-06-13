import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isSignInForm: boolean;
  user: any;
  accessToken: string | null;
  userName: string | null;
};

const initialState: AuthState = {
  isSignInForm: true,
  user: null,
  accessToken: null,
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
    setAccessToken(state, { payload }: PayloadAction<string | null>) {
      state.accessToken = payload;
    },
    setUserName(state, { payload }: PayloadAction<string | null>) {
      state.userName = payload;
    },
  },
});

export const { setIsSignInForm, setUser, setAccessToken, setUserName } =
  authSlice.actions;
export default authSlice.reducer;
