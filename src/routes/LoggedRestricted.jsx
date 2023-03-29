import React from 'react';
import { Navigate, Outlet } from 'react-router';

const LoggedRestricted = ({
  user,
  redirectPath = '/iniciar_jornada',
  children,
}) => {
  if (user) {
    if (user.isAdmin === 'ADMIN_ROL') {
      return <Navigate to={'/gestionar_agenda'} replace />;
    }
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export default LoggedRestricted;
