import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsSlice from "../features/Dashboard/dashboardSettingsSlice";
import dashboardSlice from "../features/Dashboard/dashboardSlice";
import exercisesSlice from "../features/Exercises/exercisesSlice";
import authSlice from "../features/Sign/authSlice";

export const store = configureStore({
  reducer: {
    dashboardSettings: dashboardSettingsSlice,
    dashboard: dashboardSlice,
    exercises: exercisesSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
