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
import { LayoutContainer, MainContent, PageContent } from './components/styleComponents/LayoutStyles';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="App">
      <Router>
        <LayoutContainer>
          <Header toggleMenu={toggleMenu} isMenuVisible={isMenuVisible} />
          <MainContent>
            {isMenuVisible && <Menu />}
            <PageContent>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="Concierge" element={<Concierge />} />
                <Route path="Bookings" element={<Bookings />} />
                <Route path="Guest" element={<Guest />} />
                <Route path="LoginForm" element={<LoginForm />} />
                <Route path="Room" element={<Room />} />
              </Routes>
            </PageContent>
          </MainContent>
        </LayoutContainer>
      </Router>
    </div>
  );
}

export default App;

