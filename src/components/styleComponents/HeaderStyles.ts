import styled from 'styled-components';
import { HiMenuAlt2 } from "react-icons/hi";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  width: 80%;
  color: black;
  padding: 0.625rem 1.25rem;
  margin-left: 8rem;

  .logo {
    height: 5rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`;

export const Nav = styled.nav`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
  position: absolute;
  margin-left: 6rem;
`;

export const Dropdown = styled.div`
  position: relative;
  background-color: white;
`;

export const MenuIcon = styled(HiMenuAlt2)`
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  color: black;
  border: none;
  margin-left: 1.80rem;
  margin-right: 1.80rem;
`;

export const Icons = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const MenuWrapper = styled.div<{ ismenuvisible: boolean }>`
  display: ${({ ismenuvisible }) => (ismenuvisible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 3.75rem;
  left: 0;
  width: 15.625rem;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-right: 1.25rem;

  &:hover {
    color: #e60000;
  }
`;
