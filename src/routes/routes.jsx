import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetPackage from '../pages/GetPackage.jsx';
import Workday from '../pages/Workday.jsx';
import Profile from '../pages/Profile.jsx';

const Links = () => {
  return (
    <Routes>
      <Route exact path="/obtener_paquete" element={<GetPackage />} />
      <Route exact path="/iniciar_jornada" element={<Workday />} />
      <Route exact path="/mi_perfil" element={<Profile />} />
    </Routes>
  );
};

export default Links;
