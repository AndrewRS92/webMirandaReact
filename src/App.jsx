import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Concierge from './pages/Concierge';
import Contact from './pages/Contact';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import EditUser from './components/EditUser'
import Room from './pages/Room';
import { LayoutContainer, MainContent, HeaderContainer, PageContentWrapper } from './components/styleComponents/LayoutStyles';
import { UserProvider } from './components/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import store from './store'; 

const App = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('Dashboard');

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <Provider store={store}>
      <UserProvider>
        <div className="App">
          <Router>
            <LayoutContainer>
              <HeaderContainer>
                <Header toggleMenu={toggleMenu} title={headerTitle} />
              </HeaderContainer>
              <MainContent>
                <PageContentWrapper isMenuVisible={isMenuVisible.toString()}>
                  <Routes>
                    <Route 
                      path="/LoginForm" 
                      element={<LoginForm setHeaderTitle={setHeaderTitle} />} 
                    />
                    <Route 
                      path="/" 
                      element={<ProtectedRoute element={<Dashboard />} setHeaderTitle={setHeaderTitle} title="Dashboard" />} 
                    />
                    <Route 
                      path="/Concierge" 
                      element={<ProtectedRoute element={<Concierge />} setHeaderTitle={setHeaderTitle} title="Concierge" />} 
                    />
                    <Route 
                      path="/Bookings" 
                      element={<ProtectedRoute element={<Bookings />} setHeaderTitle={setHeaderTitle} title="Bookings" />} 
                    />
                    <Route 
                      path="/Guest" 
                      element={<ProtectedRoute element={<Contact />} setHeaderTitle={setHeaderTitle} title="Contact" />} 
                    />
                    <Route 
                      path="/Room" 
                      element={<ProtectedRoute element={<Room />} setHeaderTitle={setHeaderTitle} title="Room" />} 
                    />
                      <Route
                      path="/EditUser"
                      element={<ProtectedRoute element={<EditUser />} setHeaderTitle={setHeaderTitle} title="Edit User" />}
                    />
                  </Routes>
                </PageContentWrapper>
              </MainContent>
            </LayoutContainer>
          </Router>
        </div>
      </UserProvider>
    </Provider>
  );
};

export default App;
