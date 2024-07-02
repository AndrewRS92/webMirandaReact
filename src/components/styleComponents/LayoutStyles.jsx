import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
`;

export const PageContent = styled.div`
  flex: 1;
  padding: 1rem;
  background-color: white;
  overflow-y: auto; // Permitir desplazamiento vertical
`;

export const PageContentWrapper = styled.div`
  margin-top: 60px;
  padding-left: ${props => (props.isMenuVisible ? '250px' : '0')};
  transition: padding-left 0.3s ease;
  flex: 1;
  overflow-y: auto; // Permitir desplazamiento vertical
`;

export const HeaderContainer = styled.div`
  flex: 0 0 auto;
`;
