import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  width: 15rem;
  box-shadow: 0.125rem 0 0.3125rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

export const MenuNav = styled.nav`
  padding-top: 1.25rem;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin: 0.625rem 0;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 1.125rem;
  padding: 0.625rem 1.25rem;
  display: block;
  margin-bottom: 0.625rem;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #ff0000;
  }

  &.active {
    color: #ff0000;
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      height: 100%;
      width: 0.25rem;
      background-color: #ff0000;
    }
  }
`;
