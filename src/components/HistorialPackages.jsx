import React from 'react';
import Typography from '@mui/material/Typography';
import Card from './Card.jsx';
import usuariosFake from '../statics/DummyData/usuariosFake';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';

const HistorialPackages = () => {
  return (
    <>
      <FullAccordion title={'Historial de repartos'}>
        <Typography variant="body2" gutterBottom>
          Ya repartiste {usuariosFake[0].totalPaquetesEntregados} paquetes
        </Typography>
        {usuariosFake[0].paquetesEntregados[0] ? (
          usuariosFake[0].paquetesEntregados.map((data, i) => {
            return (
              <Card direccion={data.direccion} estado={data.estado} key={i} />
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
