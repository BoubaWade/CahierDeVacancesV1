import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsSlice from "../features/Dashboard/dashboardSettingsSlice";

export const store = configureStore({
  reducer: {
    dashboardSettings: dashboardSettingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
