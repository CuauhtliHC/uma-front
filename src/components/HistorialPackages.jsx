import React, { useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import CardPackage from '../commons/CardPackage.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';

const HistorialPackages = () => {
  const publicUrl = process.env.REACT_APP_URL_BACKEND;
  let packetHistory = [];
  let totalPacketHistory = 0;

  useEffect(() => {
    axios
      .get(`${publicUrl}orders/`, {
        withCredentials: true,
      })
      .then((response) => {
        packetHistory = response;
        totalPacketHistory = packetHistory.length;
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <FullAccordion title={'Historial de repartos'}>
        <Typography variant="body2" gutterBottom>
          Ya repartiste {totalPacketHistory} paquetes
        </Typography>
        {packetHistory ? (
          packetHistory.map((data, i) => {
            return (
              <CardPackage
                direccion={data.direccion}
                estado={data.estado}
                key={i}
              />
            );
          })
        ) : (
          <Typography variant="body2" gutterBottom>
            No realizaste ningún reparto
          </Typography>
        )}
      </FullAccordion>
    </>
  );
};

export default HistorialPackages;
