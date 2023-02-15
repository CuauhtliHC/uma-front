import React from 'react';

import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import '../statics/styles/workday.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '../components/Card.jsx';

const Workday = () => {
  const totalPaquetesRepartidos = 6;
  const totalPaquetesPendientes = 2;

  const paquetesPendientes = [
    { direccion: 'Mendoza 1810, CABA', estado: 'En viaje' },
    {
      direccion: 'Miguel de Azcuenaga 826, Vicente Lopez',
      estado: 'Pendiente',
    },
    { direccion: 'Ramallo 2186, CABA ', estado: 'Pendiente' },
  ];

  const paquetesRepartidos = [
    { direccion: 'Amenabar 2356, CABA', estado: 'Entregado' },
    { direccion: 'Av Cerviño 3620, CABA', estado: 'Entregado' },
    { direccion: 'Juncal 2110, CABA', estado: 'Cancelado' },
    { direccion: 'Av. Carabobo y Rivadavia, CABA', estado: 'Entregado' },
    { direccion: 'Rosario 623, CABA', estado: 'Entregado' },
    { direccion: 'Santa Fe 4567', estado: 'Entregado' },
  ];

  return (
    <div className="divMasterWorkday">
      <Button variant="contained" fullWidth>
        OBTENER PAQUETES
      </Button>
      <Accordion className="accordionWorkday">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>Repartos pendientes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" gutterBottom>
            Tenes {totalPaquetesPendientes} paquetes pendientes
          </Typography>
          {paquetesPendientes[0] ? (
            paquetesPendientes.map((data, i) => {
              return (
                <div className="column is-2" key={i}>
                  <Card direccion={data.direccion} estado={data.estado} />
                </div>
              );
            })
          ) : (
            <Typography variant="body2" align="center" gutterBottom>
              No tenés repartos pendientes
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordionWorkday">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>Historial de repartos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" gutterBottom>
            Ya repartiste {totalPaquetesRepartidos} paquetes
          </Typography>
          {paquetesRepartidos[0] ? (
            paquetesRepartidos.map((data, i) => {
              return (
                <div className="column is-2" key={i}>
                  <Card direccion={data.direccion} estado={data.estado} />
                </div>
              );
            })
          ) : (
            <Typography variant="body2" gutterBottom>
              No realizaste ningún reparto
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Workday;
