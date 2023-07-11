import React from 'react';

import st from './FooterButton.module.scss';

function FooterButton({ text, onClick }) {
  return (
    <button type="button" className={st.FooterButton} onClick={onClick}>
      <span className={st.FooterButton__Hover}>{text}</span>
    </button>
  )
}

export default FooterButton