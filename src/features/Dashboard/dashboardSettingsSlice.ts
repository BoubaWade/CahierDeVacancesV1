import { createSlice } from "@reduxjs/toolkit";
import { SideBarState } from "../../Types/layoutTypes";

const initialState: SideBarState = {
  isModalChoiceLevelActive: true,
  isHomeActive: false,
  isClassesActive: false,
  isToDoActive: false,
  isSettingsActive: false,
};

const dashboardSettingsSlice = createSlice({
  name: "dashboardSettings",
  initialState,
  reducers: {
    setMainDashboardActive(state, { payload }) {
      for (const key in state) {
        state[key as keyof SideBarState] = false;
      }
      state[payload as keyof SideBarState] = true;
    },
  },
});

export const { setMainDashboardActive } = dashboardSettingsSlice.actions;

export default dashboardSettingsSlice.reducer;
