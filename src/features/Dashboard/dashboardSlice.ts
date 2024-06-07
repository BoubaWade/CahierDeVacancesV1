import { createSlice } from "@reduxjs/toolkit";
import { Exercise } from "../../Types/dataTypes";

type DashboardState = {
  toDoExercises: Exercise[];
};

const initialState: DashboardState = {
  toDoExercises: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addToDoExercise(state: DashboardState, { payload }) {
      const index = state.toDoExercises.findIndex(
        (todo) => todo.id === payload.id
      );

      if (index !== -1) {
        state.toDoExercises[index] = payload;
      } else {
        state.toDoExercises.unshift(payload);
      }
    },
  },
});

export const { addToDoExercise } = dashboardSlice.actions;

export default dashboardSlice.reducer;
