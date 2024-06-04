import { createSlice } from "@reduxjs/toolkit";
import { SideBarState } from "../../Types/layoutTypes";

const initialState: SideBarState = {
  isHomeActive: true,
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

    // setIsMainSwitchButtonActived: (state) => {
    //   state.isMainSwitchButtonActived = !state.isMainSwitchButtonActived;
    // },
    // setIsPopUpDisplayed: (state, { payload }) => {
    //   state.isPopUpDisplayed = payload;
    // },
    // setIsBasketDisplayed: (state, { payload }) => {
    //   state.isBasketDisplayed = payload;
    // },
    // setIsButtonAddDisplayed: (state, { payload }) => {
    //   state.isButtonAddDisplayed = payload;
    // },
    // setIsDisplayUpdateCardModal: (state, { payload }) => {
    //   state.isDisplayUpdateCardModal = payload;
    // },
    // setIsAddSectionDisplayed: (state, { payload }) => {
    //   state.isAddSectionDisplayed = payload;
    // },
  },
});

export const { setMainDashboardActive } = dashboardSettingsSlice.actions;

export default dashboardSettingsSlice.reducer;
