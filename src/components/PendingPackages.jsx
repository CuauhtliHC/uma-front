import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import usuariosFake from '../statics/DummyData/usuariosFake';
import CardPackage from '../commons/CardPackage.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';

const PendingPackages = () => {
  return (
    <>
      <FullAccordion title="Repartos pendientes">
        {usuariosFake[0].paquetesPendientes ? (
          <>
            <Typography>
              Tenes {usuariosFake[0].totalPaquetesPendientes} paquetes
              pendientes
            </Typography>
            {usuariosFake[0].paquetesPendientes.map((data, i) => {
              return (
                <Link
                  to={`/obtener_paquete/${data.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                  key={i}
                >
                  <CardPackage
                    direccion={data.direccion}
                    estado={data.estado}
                    id={data.id}
                  />
                </Link>
              );
            })}
          </>
        ) : (
          <Typography>No tenés repartos pendientes</Typography>
        )}
      </FullAccordion>
    </>
  );
};

export default PendingPackages;
