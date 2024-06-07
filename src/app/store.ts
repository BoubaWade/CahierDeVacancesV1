import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsSlice from "../features/Dashboard/dashboardSettingsSlice";
import dashboardSlice from "../features/Dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    dashboardSettings: dashboardSettingsSlice,
    dashboard: dashboardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
