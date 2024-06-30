// src/components/styleComponents/BookingTableStyles.js
import styled from 'styled-components';

export const TableContainer = styled.div`
  margin: 2rem;
  margin-left: 18rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f9f9f9;
`;

export const TableHeader = styled.th`
  border: 0.1rem solid #ddd;
  padding: 1.2rem;
  text-align: left;
  color: #686868;
  font-weight: bold;
`;

export const TableBody = styled.tbody`
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  border: 0.1rem solid #ddd;
  padding: 0.8rem;
  text-align: left;
  color: black;
`;

export const NotesButton = styled.button`
  background-color: #f9f9f9;
  border: 0.1rem solid #ddd;
  padding: 0.5rem;
  cursor: pointer;
  color: black;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  margin-left: 11rem;
`;

export const FilterOption = styled.button`
  background-color: #f9f9f9;
  color: #000;
  border: none;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  position: relative;

  &.active {
    font-weight: bold;
    color: #000;
  }

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.1rem;
    height: 0.2rem;
    background-color: #4caf50;
  }

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.1rem;
    height: 0.2rem;
    background-color: #4caf50;
  }
`;

export const BookingStatus = styled.p`
  width: 6em;
  text-align: center;
  padding: 0.5em;
  font-weight: 300;
  border-radius: 0.5em;
  ${({ status }) => {
    switch (status.toLowerCase()) {
      case 'check in':
        return `
          color: #5AD07A;
          font-weight: bold;
          background-color: #E8FFEE;
        `;
      case 'check out':
        return `
          color: #E23428;
          font-weight: bold;
          background-color: #FF766655;
        `;
      case 'in progress':
        return `
          color: #B8860B;
          font-weight: bold;
          background-color: #FFFACD;
        `;
      default:
        return '';
    }
  }}
`;
