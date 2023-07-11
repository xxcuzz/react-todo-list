import React, { useState } from 'react';

import AddButton from '../../atoms/buttons/add/AddButton';
import AddTodoInput from '../../atoms/inputs/addTodoInput/AddTodoInput';

import st from './TodoForm.module.scss';

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    onAddTodo(inputValue);
    setInputValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value) {
      handleAddTodo();
    }
  };

  return (
    <div className={st.InputGroup}>
      <AddTodoInput value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} />
      <AddButton onClick={handleAddTodo} />
    </div>
  );
}

export default TodoForm;
