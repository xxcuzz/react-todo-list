import React from 'react';

import deleteIcon from '../../../../assets/trash.svg';

import st from './DeleteButton.module.scss';

function DeleteButton({ disabled, onClick }) {
  return (
    <button type="button" className={st.Deletion} disabled={disabled} onClick={onClick}>
      <img src={deleteIcon} alt="Delete" className={st.Can} />
    </button>
  );
}

export default DeleteButton;
