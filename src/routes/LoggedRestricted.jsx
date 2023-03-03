import React from 'react';
import { Navigate, Outlet } from 'react-router';

const LoggedRestricted = ({
  user,
  redirectPath = '/iniciar_jornada',
  children,
}) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export default LoggedRestricted;
