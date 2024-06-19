// Protected.js
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Protected = ({ children }) => {
  const { user, checkAuthentication } = useAuth();

  useEffect(() => {
    checkAuthentication()
      .catch(() => {
        // Redirect to login page if authentication check fails
        return <Navigate to="/home" />;
      });
  }, [checkAuthentication]);

  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default Protected;