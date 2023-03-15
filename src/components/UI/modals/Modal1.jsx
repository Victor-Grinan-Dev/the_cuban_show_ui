import React from 'react';
import css from './modals.module.css';

const Modal1 = (props) => {

    const {component} = props;

  return (
    <div className={css.absoluteCenter}>
        {component && component}
    </div>
  )
}

export default Modal1;