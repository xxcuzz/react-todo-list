import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';
import storageMiddleware from '../repository/localRepository';

describe('Redux Store Configuration', () => {
  test('Store is configured correctly', () => {
    const store = configureStore({
      reducer: {
        todos: todoReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageMiddleware),
    });

    expect(store.getState).toBeDefined();
    expect(store.dispatch).toBeDefined();
  });
});