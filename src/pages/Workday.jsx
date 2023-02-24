import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import '../statics/styles/workday.css';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';
import PendingPackages from '../components/PendingPackages.jsx';
import HistorialPackages from '../components/HistorialPackages.jsx';

const Workday = () => {
  const navigate = useNavigate();
  const toGetPackage = () => {
    navigate('/obtener_paquete');
  };
  return (
    <Box className="divMasterWorkday">
      <BlueLargeButton handleSubmit={toGetPackage}>
        OBTENER PAQUETES
      </BlueLargeButton>
     <PendingPackages />
    <HistorialPackages />
    </Box>
  );
};

export default Workday;
