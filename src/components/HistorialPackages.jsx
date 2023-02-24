import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import '../statics/styles/workday.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from './Card.jsx';
import usuariosFake from '../statics/DummyData/usuariosFake';

const HistorialPackages = () => {
  return (
    <div><Accordion className="accordionWorkday">
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
  </Accordion></div>
  );
};

export default HistorialPackages;
