import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Exercise } from "../../Types/dataTypes";
import { getToDosFromDatabase } from "../../supabase/api";

type DashboardState = {
  level: string;
  chaptersOfLevel: string[];
  toDoExercises: Exercise[];
  toDoExercisesByLevel: Exercise[];
  todoFilteredBySelect: Exercise[];
  searchToDoValue: string;
  isSubsribted: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: DashboardState = {
  level: "",
  chaptersOfLevel: [],
  toDoExercises: [],
  toDoExercisesByLevel: [],
  todoFilteredBySelect: [],
  searchToDoValue: "",
  isSubsribted: false,
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk(
  "dashboard/fetchTodos",
  async (user: any, { dispatch }) => {
    const todosFromDatabase = await getToDosFromDatabase(user);
    if (todosFromDatabase) {
      dispatch(setToDoExercises(todosFromDatabase));
    }
    return todosFromDatabase;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setIsSubsribted(state, { payload }) {
      state.isSubsribted = payload;
    },
    setLevel(state, { payload }) {
      state.level = payload;
    },
    setChaptersOfLevel(state, { payload }) {
      state.chaptersOfLevel = payload;
    },
    setToDoExercises(state, { payload }) {
      state.toDoExercises = payload;
    },
    setToDoExercisesByLevel(state, { payload }) {
      state.toDoExercisesByLevel = payload;
    },
    addToDoExercise(state, { payload }) {
      const index = state.toDoExercisesByLevel.findIndex(
        (todo) => todo.id === payload.id
      );

      if (index !== -1) {
        state.toDoExercisesByLevel[index] = payload;
      } else {
        state.toDoExercisesByLevel.unshift(payload);
      }
    },

    deleteToDoExercise(state, { payload }) {
      const toDoFiltered = state.todoFilteredBySelect.filter(
        (todo) => todo.id !== payload
      );
      state.todoFilteredBySelect = toDoFiltered;
    },
    setSearchToDoValue(state, { payload }) {
      state.searchToDoValue = payload;
    },
    setTodoFilteredBySelect(state, { payload }) {
      state.todoFilteredBySelect = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.toDoExercises = action.payload || [];
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch todos";
      });
  },
});

export const {
  setIsSubsribted,
  setLevel,
  setChaptersOfLevel,
  setToDoExercises,
  setToDoExercisesByLevel,
  addToDoExercise,
  deleteToDoExercise,
  setSearchToDoValue,
  setTodoFilteredBySelect,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
