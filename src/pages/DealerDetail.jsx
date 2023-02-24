import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import {
  Avatar,
  Box,
  Paper,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BackButton from '../commons/buttons/BackButton.jsx';
import PendingPackages from '../components/PendingPackages.jsx';
import HistorialPackages from '../components/HistorialPackages.jsx';
import repartidoresFake from '../statics/DummyData/repartidoresFake';

const DealerDetail = () => {
  const params = useParams();
  const idDealer = params.id;
  const idArray = idDealer - 1;
  const estado = repartidoresFake[idArray].status;
  const fotoPerfil = repartidoresFake[idArray].img;
  const nombre = repartidoresFake[idArray].name;

  const navigate = useNavigate();
  const backToDealer = () => {
    navigate('/gestionar_repartidores');
  };
  const handleColorStatus = (Status) => {
    if (Status === 'Inactivo') {
      return '#FF6B6B';
    }
    if (Status === 'Viaje en curso') {
      return '#217BCE';
    }
    if (Status === 'Finalizó') {
      return '#96DB76';
    }
  };
  return (
    <div>
      <BackButton handleSubmit={backToDealer} />
      <Box style={{ marginTop: '5%' }}>
        <Paper style={{ margin: '2%', padding: '4%' }}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Avatar
                alt="foto de perfil"
                src={fotoPerfil}
                sx={{ width: '50px', height: '50px' }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography fontWeight="bold" fontSize={20}>
                {nombre}
              </Typography>
              <Typography
                variant="subtitle2"
                fontSize={15}
                color={handleColorStatus(estado)}
                >
                <FiberManualRecordIcon
                  fontSize="small"
                  sx={{ color: handleColorStatus(estado) }}
                />
                {estado}
              </Typography>
            </Grid>
            <Grid item xs={1} style={{ textAlign: 'right' }}>
              <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} />
              </FormGroup>
            </Grid>
          </Grid>
          <PendingPackages />
          <HistorialPackages />
        </Paper>
      </Box>
    </div>
  );
};

export default DealerDetail;
