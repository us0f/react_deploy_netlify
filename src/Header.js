import React from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';

const Header = () => {
  const iconStyle = 'float-end size-14'
  const { width } = useWindowSize();

  return (
    <header className='flex bg-blue-400 h-20 justify-between items-center p-4'>
        <h1 className='text-4xl font-bold float-none'>React JS Blog</h1>
        {width < 768 ? <FaMobileAlt className={iconStyle}/> : width < 992 ? <FaTabletAlt className={iconStyle}/> : <FaLaptop className={iconStyle}/> }
    </header>
  )
}

export default Header;