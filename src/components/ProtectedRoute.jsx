import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../components/UserContext';

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(UserContext);

  return user ? element : <Navigate to="/LoginForm" />;
};

export default ProtectedRoute;
