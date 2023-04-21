import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Alert from '@mui/material/Alert';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';
import PendingPackages from '../components/PendingPackages.jsx';
import HistorialPackages from '../components/HistorialPackages.jsx';
import { user } from '../state/user.jsx';

const Workday = () => {
  const dataUser = useRecoilValue(user);
  const navigate = useNavigate();
  const toGetPackage = () => {
    navigate('/obtener_paquete');
  };

  return (
    <>
      {dataUser.ddjj.status ? (
        <BlueLargeButton handleSubmit={toGetPackage}>
          OBTENER PAQUETES
        </BlueLargeButton>
      ) : (
        <Alert variant="filled" severity="error">
          Usted no está en condiciones de trabajar hoy. Descance y vuelva
          mañana.
        </Alert>
      )}
      <PendingPackages />
      <HistorialPackages />
    </>
  );
};

export default Workday;
