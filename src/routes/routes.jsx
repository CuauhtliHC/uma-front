import React from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import GetPackage from '../pages/GetPackage.jsx';
import Workday from '../pages/Workday.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Profile from '../pages/Profile.jsx';
import RestorePassword from '../pages/RestorePassword.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { user } from '../state/user.jsx';
import LoggedRestricted from './LoggedRestricted.jsx';

const Links = () => {
  const dataUser = useRecoilValue(user);
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" replace />} />
      <Route element={<ProtectedRoute user={dataUser} />}>
        <Route exact path="/mi_perfil" element={<Profile />} />
        <Route exact path="/obtener_paquete" element={<GetPackage />} />
        <Route exact path="/iniciar_jornada" element={<Workday />} />
        <Route exact path="/obtener_paquete/:id" element={<></>} />
      </Route>
      <Route element={<LoggedRestricted user={dataUser} />}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/recuperar_contraseña" element={<RestorePassword />} />
      </Route>
    </Routes>
  );
};

export default Links;
