import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  MenuContainer,
  MenuNav,
  MenuList,
  MenuItem,
  MenuLink,
  UserInfo,
  UserImage,
  UserDetails,
  MenuButton
} from '../components/styleComponents/MenuStyles';
import { useUserContext } from '../components/context/UserContext';

interface MenuProps {
  isMenuVisible: boolean;
}

const Menu: React.FC<MenuProps> = ({ isMenuVisible }) => {
  const navigate = useNavigate();
  const { user, setIsEditing } = useUserContext();

  const handleEditUser = () => {
    setIsEditing(true);
    navigate('/EditUser');
  };

  return (
    <MenuContainer style={{ display: isMenuVisible ? 'block' : 'none' }}>
      <MenuNav>
        <MenuList>
          <MenuItem>
            <MenuLink to="/" end>
              Dashboard
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/Room">
              Room
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/Bookings">
              Bookings
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/Contact">
              Contact
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/Concierge">
              Concierge
            </MenuLink>
          </MenuItem>
        </MenuList>
      </MenuNav>
      <UserInfo>
        <UserImage src="user-image-url" alt="User Image" />
        <UserDetails>
          <h4>{user?.name}</h4>
          <p>{user?.email}</p>
          <MenuButton onClick={handleEditUser}>Edit</MenuButton>
        </UserDetails>
      </UserInfo>
      <Outlet />
    </MenuContainer>
  );
};

export default Menu;
