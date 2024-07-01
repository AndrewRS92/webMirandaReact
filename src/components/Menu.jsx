import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  MenuContainer,
  MenuNav,
  MenuList,
  MenuItem,
  MenuLink,
  UserInfo,
  UserImage,
  UserDetails,
  ContactButton  
} from './styleComponents/MenuStyles';

const Menu = () => {
  return (
    <>
      <MenuContainer>
        <MenuNav>
          <MenuList>
            <MenuItem>
              <MenuLink to="/" activeClassName="active" end>Dashboard</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/Room" activeClassName="active">Room</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/Bookings" activeClassName="active">Bookings</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/Contact" activeClassName="active">Contact</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/Concierge" activeClassName="active">Concierge</MenuLink>
            </MenuItem>
          </MenuList>
        </MenuNav>
        <UserInfo>
          <UserImage src="user-image-url" alt="User Image" />
          <UserDetails>
            <h4>Andrew Rojas</h4>
            <p>adw@gmail.com</p>
            <ContactButton>Contact Us</ContactButton>
          </UserDetails>
        </UserInfo>
      </MenuContainer>
      <Outlet />
    </>
  );
};

export default Menu;