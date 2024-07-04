import React, { useContext } from 'react';
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
} from './styleComponents/MenuStyles';
import { UserContext } from './context/UserContext';

const Menu = () => {
  const navigate = useNavigate();
  const { user, setIsEditing } = useContext(UserContext);

  const handleEditUser = () => {
    setIsEditing(true);
    navigate('/EditUser');
  };

  return (
    <>
      <MenuContainer>
        <MenuNav>
          <MenuList>
            <MenuItem>
              <MenuLink to="/" activeclassname="active" end>Dashboard</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/Room" activeclassname="active">Room</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/Bookings" activeclassname="active">Bookings</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/Contact" activeclassname="active">Contact</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/Concierge" activeclassname="active">Concierge</MenuLink>
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
      </MenuContainer>
      <Outlet />
    </>
  );
};

export default Menu;
