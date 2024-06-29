import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Concierge from './pages/Concierge';
import Guest from './pages/Guest';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Room from './components/Room';
import { LayoutContainer, MainContent, HeaderContainer, PageContentWrapper } from './components/styleComponents/LayoutStyles';




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
