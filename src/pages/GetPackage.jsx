import {
  Box, IconButton, Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPackage from '../commons/AddPackage.jsx';
import packageFake from '../statics/DummyData/packagesFake';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';

const GetPackage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(packageFake);
  }, []);
  const backToViewStart = () => {
    navigate('/iniciar_jornada');
  };
  const startJornada = () => {
    navigate('/iniciar_jornada');
  };
  return (
    <>
      <Box>
        <IconButton onClick={backToViewStart} sx={{ padding: 0 }}>
          <ArrowBackIosNewIcon sx={{ width: '26px', height: '26px' }} />
        </IconButton>
        <Box marginTop="38px">
          <Typography fontWeight={700} fontSize="16px">
            Obtener paquetes
          </Typography>
          <Typography fontWeight={400} fontSize="12px">
            ¿Cuantos paquetes más vas a repartir hoy?
          </Typography>
          <Box>
            {data
              ? data.map((dataPackage, i) => {
                return (
                    <AddPackage
                      key={i}
                      id={dataPackage.id}
                      direction={dataPackage.direction}
                      maxQuantity={dataPackage.maxQuantity}
                    />
                );
              })
              : null}
          </Box>
          <BlueLargeButton handleSubmit={startJornada}>
            INICIAR JORNADA
          </BlueLargeButton>
        </Box>
      </Box>
    </>
  );
};

export default GetPackage;
