import React, { Fragment } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';
import { ROUTES } from '../utils';

const PublicRoute = ({ children, isAuthCheck }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthCheck && isAuthenticated) {
    return <Navigate to={ROUTES.VENDOR_DETAILS} replace={true} />;
  }
  return <Fragment>{children ? children : <Outlet />}</Fragment>;
};

export default PublicRoute;
