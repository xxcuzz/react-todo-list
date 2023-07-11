import React from 'react';
import classNames from 'classnames';

import TodoItemCheckbox from '../../atoms/checkboxes/todo/TodoItemCheckbox';
import DeleteButton from '../../atoms/buttons/delete/DeleteButton';

import st from './TodoItem.module.scss';

function TodoItem({ id, title, completed, onDeleteTodo, onMarkCompleted }) {
  return (
    <div className={st.InputGroup}>
      <TodoItemCheckbox checked={completed} onChange={() => onMarkCompleted({ id, completed: !completed })} />
      <span
        role="button"
        tabIndex={0}
        className={classNames({ [st.CrossOut]: completed })}
        onClick={() => onMarkCompleted({ id, completed: !completed })}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onMarkCompleted({ id, completed: !completed });
          }
        }}
      >
        {title}
      </span>
      <DeleteButton disabled={completed} onClick={() => onDeleteTodo(id)} />
    </div>
  );
}

export default TodoItem;
