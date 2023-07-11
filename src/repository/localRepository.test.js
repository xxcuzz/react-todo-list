import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';

import storageMiddleware from './localRepository';
import { todoReducer, addTodo } from '../redux/todoSlice';

describe('storageMiddleware', () => {
  let store;

  beforeEach(()=> {
    store = configureStore({
      reducer: { todos: todoReducer },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageMiddleware),
    });
  });

  afterEach(() => {
    store = null;
  });

  test('should update localStorage when addTodo action is dispatched', () => {
    const todoItem = { title: 'Example todo', completed: false };
    store.dispatch(addTodo(todoItem));
    const storedTasks = JSON.parse(localStorage.getItem('todos'));

    expect(storedTasks).toHaveLength(1);
    expect(storedTasks[0].title).toEqual('Example todo');
  });

  // test('should update localStorage when deleteTodo action is dispatched', () => {
  //   const time = Date.now();
  //   const initialState = [
  //     { id: time, title: 'Todo 1', completed: false },
  //     { id: time + 1, title: 'Todo 2', completed: false },
  //   ];
  //   localStorage.setItem('todos', JSON.stringify(initialState));
  //   const todoItemId = JSON.parse(localStorage.getItem('todos')).id;
  //   store.dispatch(deleteTodo(todoItemId));

  //   const storedTodos = JSON.parse(localStorage.getItem('todos'));
  //   console.log(storedTodos)

  //   expect(storedTodos).toHaveLength(1);
  //   expect(storedTodos[0]).toMatchObject(initialState[0]);
  // });
});
