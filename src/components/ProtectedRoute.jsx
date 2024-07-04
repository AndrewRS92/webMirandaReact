import React, { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';

const ProtectedRoute = ({ element, setHeaderTitle, title }) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    setHeaderTitle(title);
  }, []); 

  return user ? element : <Navigate to="/LoginForm" />;
};

export default ProtectedRoute;
