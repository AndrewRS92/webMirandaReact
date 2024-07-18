import styled from 'styled-components';

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #dddddd;
`;

export const TableSelect = styled.div`
  display: flex;
`;

export const TableOption = styled.div<{ type?: string }>`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ type }) => (type === 'selected' ? '#00564d' : 'transparent')};
  color: ${({ type }) => (type === 'selected' ? '#ffffff' : '#333333')};
  border: 1px solid #dddddd;
`;

export const Table = styled.div`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: #ffffff;
`;

export const TableBody = styled.div``;

export const TableFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #dddddd;
`;

export const TablePages = styled.div`
  color: #333333;
`;

export const TableButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const TableButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #00564d;
  color: #ffffff;

  &:disabled {
    background-color: #dddddd;
    cursor: not-allowed;
  }
`;

export const TablePageButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const TablePageButton = styled.button<{ type: string }>`
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ type }) => (type === 'selected' ? '#00564d' : '#ffffff')};
  color: ${({ type }) => (type === 'selected' ? '#ffffff' : '#333333')};
  border: 1px solid #dddddd;
`;

export const Row = styled.div<{ type?: string }>`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #dddddd;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const Column = styled.div<{ width?: string }>`
  flex: ${({ width }) => (width ? `0 0 ${width}` : '1')};
  padding: 0.5rem;
  text-align: left;
  color: #333333;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 0.5rem;
  text-align: left;
  color: #333333;
`;

export const CommentAction = styled.button<{ type: string }>`
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ type }) => (type === 'publish' ? '#4CAF50' : '#F44336')};
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
`;
