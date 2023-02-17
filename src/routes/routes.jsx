import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetPackage from '../pages/GetPackage.jsx';
import Workday from '../pages/Workday.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Profile from '../pages/Profile.jsx';
import RestorePassword from '../pages/RestorePassword.jsx';

const Links = () => {
  return (
    <Routes>
      <Route exact path="/obtener_paquete" element={<GetPackage />} />
      <Route exact path="/iniciar_jornada" element={<Workday />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/mi_perfil" element={<Profile />} />
      <Route exact path="/recuperar_contraseña" element={<RestorePassword />} />
    </Routes>
  );
};

export default Links;
