import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  width: 15rem;
  box-shadow: 0.125rem 0 0.3125rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background-color: white;
`;

export const MenuNav = styled.nav`
  flex: 1; 
  margin-bottom: 1rem;
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
  color: #799283;
  font-size: 1.125rem;
  padding: 0.625rem 1.25rem;
  display: block;
  transition: color 0.3s;

  &:hover {
    color: #ff0000;
  }

  &.active {
    color: #ff0000;
    font-weight: bold;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem; 
  padding-top: 1.25rem; 
  border-top: 1px solid #ddd; 
  color: black;
`;

export const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.625rem;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: #e60000;
  }
`;
