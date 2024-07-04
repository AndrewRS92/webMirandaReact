import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/dashboard/Dashboard';
import Bookings from './components/bookings/Bookings';
import Concierge from './components/concierge/Concierge';
import Contact from './components/contact/Contact';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import EditUser from './components/EditUser';
import Room from './components/room/Room';
import { LayoutContainer, MainContent, HeaderContainer, PageContentWrapper } from './components/styleComponents/LayoutStyles';
import { UserProvider } from './components/context/UserContext'; 
import ProtectedRoute from './components/ProtectedRoute';
import store from './store'; // Asegúrate de importar el store aquí
import { initializeLocalStorage } from './components/DataService';

const initialState = {
  isMenuVisible: false,
  headerTitle: 'Dashboard',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuVisible: !state.isMenuVisible };
    case 'SET_HEADER_TITLE':
      return { ...state, headerTitle: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    initializeLocalStorage();
  }, []);

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const setHeaderTitle = (title) => {
    dispatch({ type: 'SET_HEADER_TITLE', payload: title });
  };

  return (
    <Provider store={store}>
      <UserProvider> 
        <div className="App">
          <Router>
            <LayoutContainer>
              <HeaderContainer>
                <Header toggleMenu={toggleMenu} title={state.headerTitle} />
              </HeaderContainer>
              <MainContent>
                <PageContentWrapper $isMenuVisible={state.isMenuVisible}>
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
