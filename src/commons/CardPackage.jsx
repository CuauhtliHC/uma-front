import React from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  DividerCard,
  GridCenterItem,
  GridRightContainer,
  GridRightItem,
  ImgPackage,
  MainBoxCard,
  StatusTypography,
} from '../statics/styles/cardPackage.jsx';
import { changeImg } from '../utils/changeColorPackage.jsx';

const Card = ({ direccion, estado }) => {
  return (
    <MainBoxCard>
      <Grid container spacing={2}>
        <GridCenterItem item>
          <ImgPackage component="img" src={changeImg(estado)} alt="Reparto en curso" />
        </GridCenterItem>
        <Grid item xs={8} container spacing={1}>
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              {direccion}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <GridRightContainer container spacing={2}>
              <GridRightItem item>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </GridRightItem>
              <Grid item>
                <StatusTypography
                  gutterBottom
                  variant="subtitle2"
                  component="div"
                >
                  {estado}
                </StatusTypography>
              </Grid>
            </GridRightContainer>
          </Grid>
        </Grid>
      </Grid>
      <DividerCard variant="inset" />
    </MainBoxCard>
  );
};

export default Card;
