import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    loadTodos: (state, action) => action.payload,
    markAsComplete: (state, action) => {
      const { id, completed } = action.payload;
      return state.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
    },
    deleteTodo: (state, action) => state.filter((todo) => todo.id !== action.payload),
    clearCompleted: (state) => state.filter((todo) => !todo.completed),
  },
});

export const { addTodo, loadTodos, markAsComplete, deleteTodo, clearCompleted } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
