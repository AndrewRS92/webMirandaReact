import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Menu from './Menu'
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
// import logo from '../images/logo.png';

interface HeaderProps {
  toggleMenu: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = React.useContext(UserContext); 
  const [ismenuvisible, setismenuvisible] = React.useState(false);

  const handleToggleMenu = () => {
    setismenuvisible(!ismenuvisible);
    toggleMenu();
  };

  const handleLogout = () => {
    logout();
    navigate('/LoginForm');
  };

  return (
    <>
      <HeaderContainer>
        <MenuIcon onClick={handleToggleMenu} />
        <Nav>{title}</Nav>
        <Icons>
          <LogoutButton onClick={handleLogout}>
            <FiLogOut size={24} />
          </LogoutButton>
        </Icons>
      </HeaderContainer>
      <MenuWrapper ismenuvisible={ismenuvisible}>
        <Menu />
      </MenuWrapper>
    </>
  );
};

export default Header;
