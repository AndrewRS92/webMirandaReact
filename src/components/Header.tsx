import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import { FiLogOut } from 'react-icons/fi';
import { useUserContext } from './context/UserContext';
import {
  HeaderContainer,
  Nav,
  MenuWrapper,
  MenuIcon,
  Icons,
  LogoutButton
} from './styleComponents/HeaderStyles';

interface HeaderProps {
  toggleMenu: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, title }) => {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const handleToggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
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
      <MenuWrapper $ismenuvisible={isMenuVisible}>
        <Menu isMenuVisible={isMenuVisible} />
      </MenuWrapper>
    </>
  );
};

export default Header;
