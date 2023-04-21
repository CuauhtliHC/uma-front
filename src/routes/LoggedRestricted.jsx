import React from 'react';
import { Navigate, Outlet } from 'react-router';
import dayjs from 'dayjs';
import { dateFormat } from '../utils/today.jsx';

const LoggedRestricted = ({ user, redirectPath = '/ddjj', children }) => {
  const dateToDay = dayjs().format('YYYY-MM-DD');
  if (user) {
    if (user.isAdmin === 'ADMIN_ROL') {
      return <Navigate to={`/gestionar_agenda/${dateFormat}`} replace />;
    } else if (user.ddjj.date === dateToDay) {
      return <Navigate to={'/iniciar_jornada'} replace />;
    }
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export default LoggedRestricted;
