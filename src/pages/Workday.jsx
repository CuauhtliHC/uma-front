import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';
import PendingPackages from '../components/PendingPackages.jsx';
import HistorialPackages from '../components/HistorialPackages.jsx';

const Workday = () => {
  const navigate = useNavigate();
  const toGetPackage = () => {
    navigate('/obtener_paquete');
  };
  return (
    <>
      <BlueLargeButton handleSubmit={toGetPackage}>
        OBTENER PAQUETES
      </BlueLargeButton>
      <PendingPackages />
      <HistorialPackages />
    </>
  );
};

export default Workday;
