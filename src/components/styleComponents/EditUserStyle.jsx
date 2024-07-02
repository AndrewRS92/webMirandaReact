import styled from 'styled-components';

export const EditUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const EditUserForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
`;

export const EditUserInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const EditUserButton = styled.button`
  padding: 0.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;