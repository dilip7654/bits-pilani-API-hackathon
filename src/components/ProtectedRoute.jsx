import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  // Redirect to login if not authenticated
  return isAuthenticated ? children : <Navigate to="/login" />;
}
