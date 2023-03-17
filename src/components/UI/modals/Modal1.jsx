import React from 'react';
import css from './modals.module.css';
import { setShowSettings } from '../../../app/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { translate } from '../../../translation/translation';

const Modal1 = (props) => {
  const dispatch = useDispatch();
  const {component} = props;
  const currentLang = useSelector(state => state.app.currentLang);
  return (
    <div className={css.absoluteCenter}>
        <p className={css.closeX} onClick={()=>dispatch(setShowSettings())}>{translate('Close', currentLang)}</p>
        {component && component}
    </div>
  )
}

export default Modal1;