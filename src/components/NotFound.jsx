import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { translate } from '../translation/translation';

const NotFound = () => {
  const currentLang = useSelector(state => state.app.currentLang);
  return (
    <div>
        <h2>404</h2>
        <p>{translate('Page not found', currentLang)}</p>
        <Link to="/">{'<<< ' + translate('Back to homepage...', currentLang)}</Link>
    </div>
  )
}

export default NotFound;