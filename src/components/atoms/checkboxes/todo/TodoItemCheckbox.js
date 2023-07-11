import React from 'react';

import st from './TodoItemCheckbox.module.scss';

function TodoItemCheckbox({ checked, onChange }) {
  return <input className={st.Checkbox} type="checkbox" checked={checked} onChange={onChange} />;
}

export default TodoItemCheckbox;
