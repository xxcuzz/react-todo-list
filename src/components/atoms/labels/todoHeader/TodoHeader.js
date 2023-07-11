import React from 'react';

import st from './TodoHeader.module.scss';

function TodoHeader({ text }) {
  return <p className={st.Text}>{text}</p>;
}

export default TodoHeader;
