import React from 'react';

import st from './AddButton.module.scss';

function AddButton({ onClick }) {
  return (
    <button type="button" className={st.SubmitButton} onClick={onClick}>
      <span>ADD</span>
    </button>
  );
}

export default AddButton;
