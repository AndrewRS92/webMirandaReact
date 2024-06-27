import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  width: 250px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    display: flex;
  flex-direction: column;
  padding: 20px;
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
     margin-bottom: 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;