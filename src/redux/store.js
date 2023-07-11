import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './todoSlice';
import storageMiddleware from '../repository/localRepository';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageMiddleware),
});
