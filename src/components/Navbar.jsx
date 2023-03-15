import React from 'react';
import style from './navbarStyle.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowSettings } from '../app/appSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.app.auth);
  const showSettings = useSelector(state => state.app.showSettings);

  return (
    <div className={style.navbar}>
      <div className={style.navbarContainer}>
        <div className={style.logo} />
            <div className={style.title}>
                <h1>Nothing but the truth</h1>
            </div>
        <div className={showSettings ? style.menuOn : style.menu} onClick={()=>dispatch(setShowSettings())} ></div>
      </div>
      <ul className={style.navigator}>
          <li><Link to="/">Content</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li>{auth ? <Link to="addContent">Add</Link>: <p className={style.deactivated}>Add</p>}</li> 
      </ul>
      
    </div>
  )
}

export default Navbar;