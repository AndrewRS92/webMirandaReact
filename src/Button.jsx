import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 1em 1.6em;
  border-radius: 0.4em;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  
  ${props =>
    props.type === 'primary' && css`
      background-color: #135846;
      color: #ebf1ef;
    `}
  
  ${props =>
    props.type === 'secondary' && css`
      background-color: #ebf1ef;
      color: #135846;
    `}
`;

const Button = ({ type }) => {
  return <ButtonStyled type={type}>Button</ButtonStyled>;
};

export default Button;
