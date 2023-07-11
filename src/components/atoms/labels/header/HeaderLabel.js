import React from 'react';

import st from './HeaderLabel.module.scss';

function HeaderLabel({ text }) {
  return <p className={st.Text}>{text}</p>;
}

export default HeaderLabel;
