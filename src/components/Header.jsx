import '../styles/Header.css'
import Menu from './Menu'
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {
    const location = useLocation();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
      };
      const getPageName = (pathname) => {
        const pathSegments = pathname.split('/').filter(Boolean);
        if (pathSegments.length === 0) return 'Dashboard';
        return pathSegments[0];
      };
    return (
      <div>
        <h1>{getPageName(location.pathname)}</h1>
    <div className="dropdown">
        <button  onClick={toggleMenu}>Menú</button>
        {isMenuVisible && (<Menu />)}
    </div>
    <div>
    </div>
      </div>
    );
  };

export default Header;