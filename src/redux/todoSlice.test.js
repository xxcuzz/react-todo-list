import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';

import { addTodo, clearCompleted, deleteTodo, loadTodos, markAsComplete, todoReducer } from './todoSlice';

describe('TodoSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { todos: todoReducer } });
  });

  test('should add todo', () => {
    const todo = { title: 'New Todo', completed: false };
    store.dispatch(addTodo({ title: todo.title }));

    const state = store.getState().todos;
    expect(state).toHaveLength(1);
    expect(state[0]).toMatchObject(todo);
  });

  test('should load todos', () => {
    const todos = [
      { title: 'Todo 1', completed: false },
      { title: 'Todo 2', completed: true },
    ];
    store.dispatch(loadTodos(todos));

    const state = store.getState().todos;
    expect(state).toHaveLength(2);
    expect(state).toMatchObject(todos);
  });

  test('should mark as complete', () => {
    const initialState = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: false },
    ];
    const updatedTodo = { id: 2, title: 'Todo 2', completed: true };

    store.dispatch(loadTodos(initialState));
    store.dispatch(markAsComplete({ id: 2, completed: true }));

    const state = store.getState().todos;

    expect(state).toHaveLength(2);
    expect(state[0]).toMatchObject(initialState[0]);
    expect(state[1]).toMatchObject(updatedTodo);
  });

  test('should delete todo', () => {
    const initialState = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: false },
    ];

    store.dispatch(loadTodos(initialState));
    store.dispatch(deleteTodo(2));

    const state = store.getState().todos;

    expect(state).toHaveLength(1);
    expect(state[0]).toMatchObject(initialState[0]);
  });

  test('should clear completed', () => {
    const initialState = [
      { id: 1, title: 'Todo 1', completed: true },
      { id: 2, title: 'Todo 2', completed: false },
      { id: 3, title: 'Todo 3', completed: true },
    ];
    store.dispatch(loadTodos(initialState));
    store.dispatch(clearCompleted());

    const state = store.getState().todos;

    expect(state).toHaveLength(1);
    expect(state[0]).toMatchObject(initialState[1]);
  });
});
