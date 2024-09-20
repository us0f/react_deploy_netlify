import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App flex flex-col w-full h-screen">
        <Header />
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout;