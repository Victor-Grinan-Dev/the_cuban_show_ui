import React from 'react';
import style from './navbarStyle.module.css';
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>Logo</div>
      <div className={style.title}>
      The Cuban Show
      </div>
      <div className={style.menu}>Menu</div>
    </div>
  )
}

export default Navbar;