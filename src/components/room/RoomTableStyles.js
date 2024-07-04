import styled from 'styled-components';

export const TableContainer = styled.div`
  margin: 2rem;
  margin-left: 6rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f9f9f9;
`;
export const NewRoomButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15rem;
`;

export const NewRoomButton = styled.button`
  background-color: #2f855a;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #276749;
  }
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

export const RoomStatus = styled.p`
  width: 6rem;
  text-align: center;
  padding: 0.5rem;
  font-weight: 300;
  border-radius: 0.5rem;
  ${({ status }) => {
    switch (status.toLowerCase()) {
      case 'available':
        return `
          color: #ffffff;
          background-color: #5AD07A;
          font-weight: bold;
        `;
      case 'booked':
        return `
          color: #ffffff;
          background-color: #E23428;
          font-weight: bold;
        `;
      default:
        return '';
    }
  }}
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const PaginationButton = styled.button`
  background-color: #f9f9f9;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PaginationInfo = styled.span`
  font-size: 1rem;
`;
