import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Concierge from './pages/Concierge';
import Contact from './pages/Contact';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Room from './pages/Room';
import { LayoutContainer, MainContent, HeaderContainer, PageContentWrapper } from './components/styleComponents/LayoutStyles';

const App = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="App">
      <Router>
        <LayoutContainer>
          <HeaderContainer>
            <Header toggleMenu={toggleMenu} />
          </HeaderContainer>
          <MainContent>
            <PageContentWrapper isMenuVisible={isMenuVisible}>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/Concierge" element={<Concierge />} />
                <Route path="/Bookings" element={<Bookings />} />
                <Route path="/Guest" element={<Contact />} />
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
