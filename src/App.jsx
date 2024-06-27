import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Bookings from './components/Bookings';
import Concierge from './components/Concierge';
import Guest from './components/Guest';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Room from './components/Room';
import Menu from './components/Menu';
import styled from 'styled-components';
import { LayoutContainer, MainContent, PageContent } from './components/styleComponents/LayoutStyles';


const PageContentWrapper = styled.div`
  margin-top: 60px;
  padding-left: ${props => (props.isMenuVisible ? '250px' : '0')};
  transition: padding-left 0.3s ease;
`;
const HeaderContainer = styled.div`
  flex: 0 0 auto;
`;


const App = () => {
  const [isMenuVisible, setMenuVisible] = useState([]);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="App">
      <Router>
        <LayoutContainer>
          <HeaderContainer>
            <Header toggleMenu={toggleMenu}/>
          </HeaderContainer>
          <MainContent>
            <PageContentWrapper>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/Concierge" element={<Concierge />} />
                <Route path="/Bookings" element={<Bookings />} />
                <Route path="/Guest" element={<Guest />} />
                <Route path="/LoginForm" element={<LoginForm />} />
                <Route path="/Room" element={<Room />} />
              </Routes>
            </PageContentWrapper>
          </MainContent>
        </LayoutContainer>
      </Router>
    </div>
  );
};

export default App;
