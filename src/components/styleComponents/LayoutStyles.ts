import styled from 'styled-components';

interface PageContentWrapperProps {
  ismenuvisible: boolean;
}

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
`;

export const PageContentWrapper = styled.div<PageContentWrapperProps>`
  margin-top: 3.75rem;
  padding-left: ${props => (props.ismenuvisible ? '25rem' : '20rem')};
  transition: padding-left 0.3s ease;
  flex: 1;
  overflow-y: auto;
`;


export const HeaderContainer = styled.div`
  flex: 0 0 auto;
`;
