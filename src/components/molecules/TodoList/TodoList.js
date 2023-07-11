import React from 'react';

import TodoFooter from '../TodoFooter/TodoFooter';
import TodoForm from '../TodoForm/TodoForm';

import TodoHeader from '../../atoms/labels/todoHeader/TodoHeader';

import st from './TodoList.module.scss';
import TodoItem from '../TodoItem/TodoItem';
import useTodoFilter from '../../../hooks/useTodoFilter';

function TodoList({ todos, onDeleteTodo, onAddTodo, onMarkCompleted, onClearCompleted }) {
  const { setFilter, filteredTodos } = useTodoFilter(todos);

  return (
    <div className={st.TodoList}>
      <TodoHeader text="TODO" />
      <TodoForm onAddTodo={onAddTodo} />
      <div className={st.TodoItems}>
        {filteredTodos.length ? (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onDeleteTodo={onDeleteTodo}
              onMarkCompleted={onMarkCompleted}
            />
          ))
        ) : (
          <div className={st.NoItems}>
            <p className={st.NoItemss}>empty</p>
          </div>
        )}
      </div>
      <TodoFooter setFilter={setFilter} onClearCompleted={onClearCompleted} />
    </div>
  );
}

export default TodoList;
