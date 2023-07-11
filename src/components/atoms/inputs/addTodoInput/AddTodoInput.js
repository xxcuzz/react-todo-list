import React, { useRef, useEffect } from 'react';

import st from './AddTodoInput.module.scss';

function AddTodoInput({ value, onChange, onKeyDown }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      className={st.Input}
      placeholder="Enter new item here"
      type="text"
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      ref={inputRef}
    />
  );
}

export default AddTodoInput;
