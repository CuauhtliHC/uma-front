import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import axios from 'axios';
// import usuariosFake from '../statics/DummyData/usuariosFake';
import CardPackage from '../commons/CardPackage.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';

const PendingPackages = () => {
  const publicUrl = process.env.REACT_APP_URL_BACKEND;
  let pendingPackages = [];
  let totalPendingPackages = 0;

  useEffect(() => {
    axios
      .get(`${publicUrl}orders/?statusOrder=PENDING`, {
        withCredentials: true,
      })
      .then((response) => {
        pendingPackages = response;
        totalPendingPackages = pendingPackages.length;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <FullAccordion title="Repartos pendientes">
        {pendingPackages ? (
          <>
            <Typography>
              Tenes {totalPendingPackages} paquetes
              pendientes
            </Typography>
            {pendingPackages.map((data, i) => {
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
