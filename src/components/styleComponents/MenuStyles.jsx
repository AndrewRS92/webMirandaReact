import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  width: 250px;
  background-color: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`;

export const MenuNav = styled.nav`
  padding-top: 20px;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin: 10px 0;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  padding: 10px 20px;
  display: block;
  &:hover {
    background-color: #f5f5f5;
  }
`;