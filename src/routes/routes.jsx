import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetPackage from '../pages/GetPackage.jsx';

const Links = () => {
  return (
    <Routes>
      <Route exact path="/obtener_paquete" element={<GetPackage />} />
    </Routes>
  );
};

export default Links;
