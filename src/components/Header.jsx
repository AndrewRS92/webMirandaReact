
import Menu from './Menu'
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import {
  HeaderContainer,
  Nav,
  Dropdown,
  MenuWrapper,
  MenuIcon,
  Icons
} from './styleComponents/HeaderStyles';
import logo from '../images/logo.png'


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
    <>
    <HeaderContainer>
    {/* <img src={logo} alt="Logo" className="logo" /> */}
    <Dropdown>
          <MenuIcon onClick={toggleMenu} />
        </Dropdown>
      <Nav>{getPageName(location.pathname)}</Nav>
     

      <Icons>
        <FaRegEnvelope className="icon" />
        <GoBell className="icon" />
        <BiCommentDetail className="icon" />
      </Icons>
    </HeaderContainer>
     <MenuWrapper isMenuVisible={isMenuVisible}>
     <Menu />
   </MenuWrapper>
   </>
  );
};

export default Header;