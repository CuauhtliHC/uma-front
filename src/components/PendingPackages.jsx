import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CardPackage from '../commons/CardPackage.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import { getOrdersUser, getOrderEnviando } from '../service/getOrderUser.jsx';
import { funcGetStatus } from '../service/getPackageAdmin.jsx';
import { user } from '../state/user.jsx';

const PendingPackages = () => {
  const [orders, setOrders] = useState(null);
  const dataUser = useRecoilValue(user);
  const [pendiente, setPendiente] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const idUser = id || dataUser.id;
    getOrderEnviando(setPendiente, idUser);
    getOrdersUser(setOrders, idUser);
  }, []);
  const rolUser = dataUser.isAdmin;

  return (
    <>
      <FullAccordion title="Repartos pendientes">
        {orders && pendiente ? (
          <>
            <Typography>Tenes {orders.total} entregas pendientes</Typography>
            {pendiente.info.map((data, i) => {
              return (
                <Link
                  to={`/obtener_paquete/${data.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                  key={i}>
                  <CardPackage
                    direccion={data.Package.address}
                    estado={funcGetStatus(data)}
                    id={data.id}
                    rolUser = {rolUser}

                  />
                </Link>
              );
            })}
            {orders.info.map((data, i) => {
              return (
                <Link
                  to={`/obtener_paquete/${data.id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                  key={i}>
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
