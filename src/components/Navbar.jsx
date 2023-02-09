import React from 'react';
import style from './navbarStyle.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbarContainer}>
        <div className={style.logo} />
            <div className={style.title}>
                <h1>The Cuban Show</h1>
            </div>
        <div className={style.menu}>Menu</div>
      </div>
      <ul className={style.navigator}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="content">Content</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;