import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35rem;
  background-color: #f0f0f0;
  margin-left: 21rem;
  margin-top: 2rem;
`;

export const LoginFormWrapper = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.625rem; 
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); 
  max-width: 25rem; 
  width: 100%;
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.3125rem; 
  font-size: 1rem;
  box-sizing: border-box;
  background-color: white;
  color: black;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0.3125rem; 
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const LoginError = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
