import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { dateFormat } from '../utils/today.jsx';

const LoggedRestricted = ({
  user,
  redirectPath = '/iniciar_jornada',
  children,
}) => {
  if (user) {
    if (user.isAdmin === 'ADMIN_ROL') {
      return <Navigate to={`/gestionar_agenda/${dateFormat}`} replace />;
    }
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export default LoggedRestricted;
