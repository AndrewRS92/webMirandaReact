
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
      <MenuNav>
        <MenuList>
          <MenuItem>
            <MenuLink to="/">Dashboard</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="Room">Room</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="Bookings">Bookings</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="Guest">Guest</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="Concierge">Concierge</MenuLink>
          </MenuItem>
        </MenuList>
      </MenuNav>
      <Outlet />
    </>
  );
};

export default Menu;




