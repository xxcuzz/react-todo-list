import React from 'react';
import { useSelector } from 'react-redux';

import FooterButton from '../../atoms/buttons/footer/FooterButton';
import FILTER from '../../../constants/TodoFilter';

import st from './TodoFooter.module.scss';

function TodoFooter({ setFilter, onClearCompleted }) {
  const uncompletedTodos = useSelector((state) => state.todos.filter((todo) => !todo.completed));

  return (
    <div className={st.Footer}>
      <span className={st.Text}>{uncompletedTodos.length} items left</span>
      <span className={st.FilterGroup}>
        <FooterButton text={FILTER.ALL} onClick={() => setFilter(FILTER.ALL)} />
        <FooterButton text={FILTER.ACTIVE} onClick={() => setFilter(FILTER.ACTIVE)} />
        <FooterButton text={FILTER.COMPLETED} onClick={() => setFilter(FILTER.COMPLETED)} />
      </span>
      <FooterButton text="Clear Completed" onClick={onClearCompleted} />
    </div>
  );
}

export default TodoFooter;
