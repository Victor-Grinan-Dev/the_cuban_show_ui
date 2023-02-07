import React from 'react';
import style from './navbarStyle.module.css';
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
          <li><a href="navbar">Home</a></li>
          <li><a href="navbar">Content</a></li>
          <li><a href="navbar">About</a></li>
          <li><a href="navbar">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar;