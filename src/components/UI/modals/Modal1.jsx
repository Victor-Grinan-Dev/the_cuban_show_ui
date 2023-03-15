import React from 'react';
import css from './modals.module.css';
import { setShowSettings } from '../../../app/appSlice';
import { useDispatch } from 'react-redux';

const Modal1 = (props) => {
    const dispatch = useDispatch();
    const {component} = props;

  return (
    <div className={css.absoluteCenter}>
        <p className={css.closeX} onClick={()=>dispatch(setShowSettings())}>Close</p>
        {component && component}
    </div>
  )
}

export default Modal1;