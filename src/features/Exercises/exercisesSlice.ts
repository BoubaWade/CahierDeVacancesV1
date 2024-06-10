import { createSlice } from "@reduxjs/toolkit";

type exercisesState = {
  activeExercise: number;
};

const initialState: exercisesState = {
  activeExercise: 0,
};

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setActiveExercise(state, { payload }) {
      state.activeExercise = payload;
    },
  },
});

export const { setActiveExercise } = exercisesSlice.actions;

export default exercisesSlice.reducer;
