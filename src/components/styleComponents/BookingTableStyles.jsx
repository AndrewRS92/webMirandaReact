import styled from 'styled-components';

export const Table = styled.table`
  margin-left: 250px;
  border-collapse: collapse;
`;


export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;


export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  color:black;
`;


export const NotesButton = styled.button`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 5px;
  cursor: pointer;
    color:black;
`;


export const StatusLabel = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;

  &.status-pending {
    background-color: #f0ad4e;
  }

  &.status-booked {
    background-color: #5cb85c;
  }

  &.status-cancelled {
    background-color: #d9534f;
  }

  &.status-refunded {
    background-color: #5bc0de;
  }
`;