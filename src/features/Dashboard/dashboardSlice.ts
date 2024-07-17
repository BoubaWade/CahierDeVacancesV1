import { createSlice } from "@reduxjs/toolkit";
import { Exercise } from "../../Types/dataTypes";

type DashboardState = {
  toDoExercises: Exercise[];
  searchToDoValue: string;
  isSubsribted: boolean;
};

const initialState: DashboardState = {
  toDoExercises: [],
  searchToDoValue: "",
  isSubsribted: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setIsSubsribted(state, { payload }) {
      state.isSubsribted = payload;
    },
    addToDoExercise(state, { payload }) {
      const index = state.toDoExercises.findIndex(
        (todo) => todo.id === payload.id
      );

      if (index !== -1) {
        state.toDoExercises[index] = payload;
      } else {
        state.toDoExercises.unshift(payload);
      }
    },

    deleteToDoExercise(state, { payload }) {
      const toDoFiltered = state.toDoExercises.filter(
        (todo) => todo.id !== payload
      );
      state.toDoExercises = toDoFiltered;
    },
    setSearchToDoValue(state, { payload }) {
      state.searchToDoValue = payload;
    },
  },
});

export const {
  setIsSubsribted,
  addToDoExercise,
  deleteToDoExercise,
  setSearchToDoValue,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
