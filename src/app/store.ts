import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsSlice from "../features/Dashboard/dashboardSettingsSlice";
import dashboardSlice from "../features/Dashboard/dashboardSlice";
import exercisesSlice from "../features/Exercises/exercisesSlice";

export const store = configureStore({
  reducer: {
    dashboardSettings: dashboardSettingsSlice,
    dashboard: dashboardSlice,
    exercises: exercisesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
