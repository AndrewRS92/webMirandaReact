import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  MenuContainer,
  MenuNav,
  MenuList,
  MenuItem,
  MenuLink
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
              <MenuLink to="/Guest" activeClassName="active">Guest</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/Concierge" activeClassName="active">Concierge</MenuLink>
            </MenuItem>
          </MenuList>
        </MenuNav>
      </MenuContainer>
      <Outlet />
    </>
  );
};

export default Menu;


