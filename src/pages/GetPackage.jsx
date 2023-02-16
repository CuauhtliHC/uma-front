import {
  Box, Button, IconButton, Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPackage from '../commons/AddPackage.jsx';

const GetPackage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    setData([
      { id: 1, direction: 'San Eugenio 2222', maxQuantity: 2 },
      { id: 2, direction: 'San Eugenio 2222', maxQuantity: 10 },
      { id: 3, direction: 'San Eugenio 2222', maxQuantity: 2 },
      { id: 4, direction: 'San Eugenio 2222', maxQuantity: 10 },
      { id: 5, direction: 'San Eugenio 2222', maxQuantity: 2 },
      { id: 6, direction: 'San Eugenio 2222', maxQuantity: 10 },
      { id: 7, direction: 'San Eugenio 2222', maxQuantity: 2 },
      { id: 8, direction: 'San Eugenio 2222', maxQuantity: 10 },
    ]);
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
          <ArrowBackIosNewIcon sx={{ width: '26px', height: '26px' }}/>
        </IconButton>
        <Box marginTop="38px">
          <Typography fontWeight={700} fontSize="16px">
            Obtener paquetes
          </Typography>
          <Typography fontWeight={400} fontSize="12px">¿Cuantos paquetes más vas a repartir hoy?</Typography>
          <Box>
            {data
              ? data.map((dataPackage, i) => {
                return <AddPackage
                key={i}
                id={dataPackage.id}
                direction={dataPackage.direction}
                maxQuantity={dataPackage.maxQuantity} />;
              })
              : null}
          </Box>
          <Button
            sx={{
              border: '1px solid #000000',
              borderRadius: '4px',
              marginTop: '50px',
            }}
            variant="contained"
            fullWidth
            onClick={startJornada}
          >
            <Typography
              color="white"
              fontStyle="normal"
              fontWeight={500}
              fontSize="15px"
            >
              INICIAR JORNADA
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default GetPackage;
