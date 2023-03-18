import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth, setShowSettings } from '../../../app/appSlice';
import style from './login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(state => state.app.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {

  }, [auth]);

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    if(!error && email.trim() !== '' && password !== ''){
      console.log(email, password);
      dispatch(setAuth(true));
      dispatch(setShowSettings(false));
    }else{
      setError(true)
    }
    
  }
  if(auth){
    return (
    <div>
      <button onClick={()=>{
        navigate('/');
        dispatch(setShowSettings(false));
        dispatch(setAuth(false));
      }}>Logout</button>
    </div>)
  }
  return (
    <div className={style.login}>
      {error && <span>Wrong Email or Password</span>}
      <form className={style.loginForm} onSubmit={handleLogin}>
      <p>Admin...</p>
        <input type="email" 
        placeholder='Email'
        onChange={(e)=>setEmail(e.target.value)} 
        />
        <input type="password" 
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)} 
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login;