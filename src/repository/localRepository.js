import { addTodo, deleteTodo, markAsComplete, clearCompleted } from '../redux/todoSlice';

const storageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    action.type === addTodo.type ||
    action.type === deleteTodo.type ||
    action.type === markAsComplete.type ||
    action.type === clearCompleted.type
  ) {
    const { todos } = store.getState();
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return result;
};

export default storageMiddleware;
