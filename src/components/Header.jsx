import Menu from './Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { UserContext } from './context/UserContext';
import {
  HeaderContainer,
  Nav,
  Dropdown,
  MenuWrapper,
  MenuIcon,
  Icons,
  LogoutButton
} from './styleComponents/HeaderStyles';
// import logo from '../images/logo.png'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(UserContext); 
  const [ismenuvisible, setismenuvisible] = useState(false);

  const toggleMenu = () => {
    setismenuvisible(!ismenuvisible);
  };

  const handleLogout = () => {
    logout();
    navigate('/LoginForm');
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
          <LogoutButton onClick={handleLogout}>
            <FiLogOut size={24} />
          </LogoutButton>
        </Icons>
      </HeaderContainer>
      <MenuWrapper ismenuvisible={ismenuvisible ? 'true' : undefined}>
        <Menu />
      </MenuWrapper>
    </>
  );
};

export default Header;
