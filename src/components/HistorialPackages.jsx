import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CardPackage from '../commons/CardPackage.jsx';
import FullAccordion from '../commons/accordion/FullAccordion.jsx';
import { getHistoryUser } from '../service/getOrderUser.jsx';
import { funcGetStatus } from '../service/getPackageAdmin.jsx';

const HistorialPackages = () => {
  const [history, setHistory] = useState(null);
  useEffect(() => {
    getHistoryUser(setHistory);
  }, []);

  return (
    <>
      <FullAccordion title={'Historial de repartos'}>
        {history ? (
          <>
            <Typography variant="body2" gutterBottom>
              {`Ya repartiste ${history.total} paquetes`}
            </Typography>
            {history.info.map((data, i) => {
              return (
                <CardPackage
                  direccion={data.Package.address}
                  estado={funcGetStatus(data)}
                  key={i}
                />
              );
            })}
          </>
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
