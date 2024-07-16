import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

interface ProtectedRouteProps {
  element: React.ReactElement;
  setHeaderTitle: (title: string) => void;
  title: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, setHeaderTitle, title }) => {
  const { user } = useUserContext();

  useEffect(() => {
    // Solo establece el título si es diferente al actual
    if (document.title !== title) {
    
    }
  }, [setHeaderTitle, title]);

  return user ? element : <Navigate to="/LoginForm" />;
};

export default ProtectedRoute;
