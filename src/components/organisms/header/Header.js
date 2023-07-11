import React from 'react';

import HeaderLabel from '../../atoms/labels/header/HeaderLabel';

import st from './Header.module.scss';

function Header() {
  return (
    <header className={st.AppHeader}>
      <HeaderLabel text="REACT TODO" />
    </header>
  );
}

export default Header;
