import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetPackage from '../pages/GetPackage.jsx';
import Workday from '../pages/Workday.jsx';

const Links = () => {
  return (
    <Routes>
      <Route exact path="/obtener_paquete" element={<GetPackage />} />
      <Route exact path="/iniciar_jornada" element={<Workday />} />
    </Routes>
  );
};

export default Links;
