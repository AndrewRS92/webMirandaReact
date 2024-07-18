import styled from 'styled-components';

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  // Cambié 3fr a 1fr para que se distribuyan igual
  gap: 1rem;  
  padding: 2rem;  
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-left: 1rem;
`;

export const KPI = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0.5rem;
  min-width: 15rem; 
  justify-content: center;
`;

export const KPIpicture = styled.div<{ type: 'red' | 'regular' }>`
  font-size: 1.2rem;  
  color: ${props => (props.type === 'red' ? '#ff5a5f' : '#333')};
  margin-right: 0.5rem;
`;

export const KPItext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #E23428;

  h3 {
    font-size: 1rem;  
    font-weight: bold;
    margin: 0;
    color: #393939;
  }

  h4 {
    font-size: 0.8rem;  
    color: #666;
    margin: 0;
  }
`;
