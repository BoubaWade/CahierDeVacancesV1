import { createSlice } from "@reduxjs/toolkit";

type exercisesState = {
  activeExercise: number;
  responseScore: number;
};

const initialState: exercisesState = {
  activeExercise: 0,
  responseScore: 0,
};

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setActiveExercise(state, { payload }) {
      state.activeExercise = payload;
    },
    setResponseScore(state, { payload }) {
      state.responseScore = payload;
    },
  },
});

export const { setActiveExercise, setResponseScore } = exercisesSlice.actions;

export default exercisesSlice.reducer;
