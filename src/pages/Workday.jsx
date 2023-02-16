import React from 'react';

import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import '../statics/styles/workday.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// eslint-disable-next-line import/no-named-as-default
import Card from '../components/Card.jsx';
import usuariosFake from '../statics/DummyData/usuariosFake';

const Workday = () => {
  return (
    <Box className="divMasterWorkday">
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
            Tenes {usuariosFake[0].totalPaquetesPendientes} paquetes pendientes
          </Typography>
          {usuariosFake[0].paquetesPendientes[0] ? (
            usuariosFake[0].paquetesPendientes.map((data, i) => {
              return (
                <div className="column is-2" key={i}>
                  <Card direccion={data.direccion} estado={data.estado} id={data.id} />
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
            Ya repartiste {usuariosFake[0].totalPaquetesEntregados} paquetes
          </Typography>
          {usuariosFake[0].paquetesEntregados[0] ? (
            usuariosFake[0].paquetesEntregados.map((data, i) => {
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
    </Box>
  );
};

export default Workday;
