import React from 'react';
import { Outlet } from 'react-router-dom';
import genStyle  from '../style/styleGeneral.module.css';

function Main() {
  return (
    <main className={genStyle.main}>
       <Outlet/>
    </main>
  )
}

export default Main;