import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetPackage from '../pages/GetPackage.jsx';
import Workday from '../pages/Workday.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';

const Links = () => {
  return (
    <Routes>
      <Route exact path="/obtener_paquete" element={<GetPackage />} />
      <Route exact path="/iniciar_jornada" element={<Workday />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
};

export default Links;
