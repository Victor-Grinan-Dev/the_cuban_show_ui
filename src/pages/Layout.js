import React from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <div className='layout'>
    <div className='bgFlag'/>

        <Navbar />
        <Main className='main'/>
        <Footer />
    </div>
  )
}

export default Layout;