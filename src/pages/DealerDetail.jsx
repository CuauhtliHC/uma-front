import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BackButton from '../commons/buttons/BackButton.jsx';
import PendingPackages from '../components/PendingPackages.jsx';
import HistorialPackages from '../components/HistorialPackages.jsx';
import { handleColorStatus } from '../utils/circleProgressFunctions.jsx';
import {
  GridButtonActive,
  PaperDetail,
  PrincipalBox,
  TypographyName,
} from '../statics/styles/dealerDetailStyle.jsx';
import { AvatarDistributorCard } from '../statics/styles/distributors/distributorsCardStyle.jsx';
import { functGetDataUserById, statusUser } from '../service/dataUser.jsx';
import perfilDelivery from '../statics/images/delivery.jpg';

const DealerDetail = () => {
  const [dataUser, setDataUser] = useState(null);
  const params = useParams();
  const idDealer = params.id;
  const fotoPerfil = perfilDelivery;

  useEffect(() => {
    functGetDataUserById(idDealer, setDataUser);
  }, [idDealer]);

  const navigate = useNavigate();
  const backToDealer = () => {
    navigate('/gestionar_repartidores');
  };
  return (
    <>
      <BackButton handleSubmit={backToDealer} />
      <PrincipalBox>
        {dataUser && (
          <PaperDetail>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <AvatarDistributorCard alt="foto de perfil" src={fotoPerfil} />
              </Grid>
              <Grid item xs={8}>
                <TypographyName>{dataUser.name}</TypographyName>
                <Typography
                  variant="subtitle2"
                  fontSize={15}
                  color={handleColorStatus(statusUser(dataUser.StatusUsers.status))}
                >
                  <FiberManualRecordIcon
                    fontSize="small"
                    color={handleColorStatus(statusUser(dataUser.StatusUsers.status))}
                  />
                  {statusUser(dataUser.StatusUsers.status)}
                </Typography>
              </Grid>
              <GridButtonActive item xs={1}>
                <FormGroup>
                  <FormControlLabel control={<Switch defaultChecked />} />
                </FormGroup>
              </GridButtonActive>
            </Grid>
            <PendingPackages user={dataUser} />
            <HistorialPackages user={dataUser} />
          </PaperDetail>
        )}
      </PrincipalBox>
    </>
  );
};

export default DealerDetail;
