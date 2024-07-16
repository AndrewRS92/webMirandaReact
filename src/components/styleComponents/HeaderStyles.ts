import styled from 'styled-components';
import { HiMenuAlt2 } from "react-icons/hi";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  color: black;
  padding: 0.625rem 1.25rem;
  z-index: 1000; /* Para asegurar que el header esté siempre encima */
`;

export const Nav = styled.nav`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
`;

export const MenuWrapper = styled.div<{ $ismenuvisible: boolean }>`
  display: ${({ $ismenuvisible }) => ($ismenuvisible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 3.75rem;
  left: 0;
  width: 15.625rem;
  background-color: white;
  box-shadow: 0.125rem 0 0.3125rem rgba(0, 0, 0, 0.1);
  z-index: 999; /* Asegurar que el menú esté encima del contenido */
`;

export const MenuIcon = styled(HiMenuAlt2)`
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  color: black;
  border: none;
  margin-right: 1.25rem;
`;

export const Icons = styled.div`
  display: flex;
  gap: 1.25rem;
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
