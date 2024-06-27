import { IoIosSearch } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  color: black;
  margin-left: 15.625rem;
  z-index: 10;
`;

export const Nav = styled.nav`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
`;

export const Dropdown = styled.div`
  position: relative;
  background-color: white;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  flex-grow: 1;
  margin: 0 1rem;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 12.5rem;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const PageName = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  margin-right: 1.80rem;
  margin-left: 1.80rem;
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

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.4rem 2rem 0.4rem 0.4rem;
  background-color: white;
  border: 0.0625rem solid #ccc;
  outline: none;
  box-sizing: border-box;
  color: black;
`;

export const SearchIcon = styled(IoIosSearch)`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  pointer-events: none; 
`;

export const Icons = styled.div`
  display: flex;
  gap: 1.25rem;
`;
