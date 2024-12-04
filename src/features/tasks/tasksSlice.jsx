import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    markAsCompleted: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = true;
    },
  },
});

export const { addTask, deleteTask, markAsCompleted } = tasksSlice.actions;

export default tasksSlice.reducer;
