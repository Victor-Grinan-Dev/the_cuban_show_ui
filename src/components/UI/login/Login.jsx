import React from 'react';
import style from './login.module.css';
const Login = () => {
  return (
    <div className={style.login}>
      <form className={style.loginForm}>
      <p>Admin...</p>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;