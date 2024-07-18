import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { store } from './features/store';
import { Provider } from 'react-redux';

interface State {
  ismenuvisible: boolean;
  headerTitle: string;
}

type Action = 
  | { type: 'TOGGLE_MENU' }
  | { type: 'SET_HEADER_TITLE'; payload: string };

const initialState: State = {
  ismenuvisible: false,
  headerTitle: 'Dashboard',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, ismenuvisible: !state.ismenuvisible };
    case 'SET_HEADER_TITLE':
      return { ...state, headerTitle: action.payload };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const setHeaderTitle = (title: string) => {
    dispatch({ type: 'SET_HEADER_TITLE', payload: title });
  };

  return (
    <Provider store={store}>
      <UserProvider>
        <LayoutContainer>
          <HeaderContainer>
            <Header toggleMenu={toggleMenu} title={state.headerTitle} />
          </HeaderContainer>
          <MainContent>
            <PageContentWrapper $ismenuvisible={state.ismenuvisible}>
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
                  path="/Contact" 
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
      </UserProvider>
    </Provider>
  );
};

export default App;
