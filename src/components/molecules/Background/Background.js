import React from 'react';

import st from './Background.module.scss';

function Background({ src }) {
  return (
    <div className={st.Gradient}>
      <img src={src} alt="Mountains" className={st.BackgroundImage} />
    </div>
  );
}

export default Background;
