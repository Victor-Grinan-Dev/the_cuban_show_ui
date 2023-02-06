import React from 'react';
import style from './navbarStyle.module.css';
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo} />
      <div className={style.title}>
          <h1>The Cuban Show</h1>
      </div>
      <div className={style.menu}>Menu</div>
    </div>
  )
}

export default Navbar;