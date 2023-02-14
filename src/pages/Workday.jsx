import React from 'react';

import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import '../statics/styles/workday.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '../components/Card.jsx';

const Workday = () => {
  const totalPaquetesRepartidos = 36;
  return (
    <div className="divMasterWorkday">
      <Button variant="contained" fullWidth>
        OBTENER PAQUETES
      </Button>
      <Accordion className="accordionWorkday">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <strong>Repartos pendientes</strong>
        </AccordionSummary>
        <AccordionDetails>No tenés repartos pendientes</AccordionDetails>
      </Accordion>
      <Accordion className="accordionWorkday">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <strong>Historial de repartos</strong>
        </AccordionSummary>
        <AccordionDetails>
          Ya repartiste {totalPaquetesRepartidos} paquetes
          <Card />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Workday;
