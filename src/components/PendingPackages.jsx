import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CardPackage from '../commons/CardPackage.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import { getOrdersUser } from '../service/getOrderUser.jsx';
import { funcGetStatus } from '../service/getPackageAdmin.jsx';

const PendingPackages = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    getOrdersUser(setOrders);
  }, []);

  return (
    <>
      <FullAccordion title="Repartos pendientes">
        {orders ? (
          <>
            <Typography>
              Tenes {orders.total} paquetes
              pendientes
            </Typography>
            {orders.info.map((data, i) => {
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
                    direccion={data.Package.address}
                    estado={funcGetStatus(data)}
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
