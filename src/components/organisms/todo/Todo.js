import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoList from '../../molecules/TodoList/TodoList';
import Background from '../../molecules/Background/Background';
import mountains from '../../../assets/mountains.jpg';
import { addTodo, deleteTodo, markAsComplete, clearCompleted, loadTodos } from '../../../redux/todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');

    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      dispatch(loadTodos(parsedTodos));
    }
  }, [dispatch]);

  return (
    <>
      <Background src={mountains} />
      <TodoList
        todos={todos}
        onDeleteTodo={(id) => dispatch(deleteTodo(id))}
        onAddTodo={(title) => dispatch(addTodo({ title }))}
        onMarkCompleted={(todo) => dispatch(markAsComplete(todo))}
        onClearCompleted={() => dispatch(clearCompleted())}
      />
    </>
  );
}

export default Todo;
