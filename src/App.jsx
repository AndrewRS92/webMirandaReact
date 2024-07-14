// src/App.jsx
import React, { useEffect, useReducer, useState } from 'react';
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
import store from './features'; 
import { initializeLocalStorage } from './components/DataService';

const initialState = {
  ismenuvisible: false,
  headerTitle: 'Dashboard',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, ismenuvisible: !state.ismenuvisible };
    case 'SET_HEADER_TITLE':
      return { ...state, headerTitle: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    initializeLocalStorage();
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
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
                  <div>
                    {todos.map((todo) => (
                      <div key={todo.id}>
                        <h1>{todo.title}</h1>
                        <p>{todo.completed.toString()}</p>
                      </div>
                    ))}
                  </div>
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
