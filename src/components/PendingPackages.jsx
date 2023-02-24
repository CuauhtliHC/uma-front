import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import '../statics/styles/workday.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import usuariosFake from '../statics/DummyData/usuariosFake';
import Card from './Card.jsx';

const PendingPackages = () => {
  return (
    <div> <Accordion className="accordionWorkday">
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
              <Link
                to={`/obtener_paquete/${data.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}>
                <Card
                  direccion={data.direccion}
                  estado={data.estado}
                  id={data.id}
                />
              </Link>
            </div>
          );
        })
      ) : (
        <Typography variant="body2" align="center" gutterBottom>
          No tenés repartos pendientes
        </Typography>
      )}
    </AccordionDetails>
  </Accordion></div>
  );
};

export default PendingPackages;
