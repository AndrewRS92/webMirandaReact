import '../styles/Header.css'
import Menu from './Menu'
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";

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
      <div className="header">
        <nav>{getPageName(location.pathname)}</nav>
    <div className="dropdown">
        <button onClick={toggleMenu}className="menu__icon">{<HiMenuAlt2 />}</button>
        {isMenuVisible && (<Menu />)}
    </div>

    <div className="search"> 
      <div className="searchWrapper">
                <input type="text" className="searchInput" />
                <IoIosSearch className="search__Icon" />
            </div>
            </div>
    <div className="icons">  
            
            <FaRegEnvelope className="icon" />
            <GoBell className="icon" />
            <BiCommentDetail className="icon" /> 
            </div>

      </div>
      
    );
  };

export default Header;