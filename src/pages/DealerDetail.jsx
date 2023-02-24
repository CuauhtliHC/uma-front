import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import avatarImg from '../statics/images/avatar.png';
import PendingPackages from '../components/PendingPackages.jsx';
import HistorialPackages from '../components/HistorialPackages.jsx';

const DealerDetail = () => {
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
                src={avatarImg}
                sx={{ width: '50px', height: '50px' }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography fontWeight="bold" fontSize={20}>
                Farid
              </Typography>
              <Typography
                variant="subtitle2"
                fontSize={15}
                color={handleColorStatus('Inactivo')}>
              <FiberManualRecordIcon
                fontSize="small"
                sx={{ color: handleColorStatus('Inactivo') }}
              /> Inactivo
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
