import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const useCookies = () => {
  const [cookieValue, setCookieValue] = useState(null);

  useEffect(() => {
    const getCookie = () => {
        return Cookies.get('tcs');
    }
    const cookie = getCookie();
    setCookieValue(cookie);
  }, []);

  const setCookie = (value, hours = 3) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (hours * 60 * 60 * 1000)); // 3 horas
    Cookies.set('tcs', value, { expires: expirationDate } );
    setCookieValue(value);
  };
  
  const removeCookie = () => {
    Cookies.remove('tcs');
    //Cookie.set('tcs', "")//?
    setCookieValue(null);
  };
  return {cookieValue, setCookie, removeCookie};
}

export default useCookies;