import React from 'react';
import {
  Divider,
  Grid,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import redBox from '../statics/images/caja-roja.png';
import greenBox from '../statics/images/caja-verde.png';
import yellowBox from '../statics/images/caja-amarilla.png';
import blueBox from '../statics/images/caja-azul.png';

const Card = ({ direccion, estado }) => {
  let boxImg;

  function cambiarImg() {
    if (estado === 'Entregado') {
      boxImg = greenBox;
    } else if (estado === 'Cancelado') {
      boxImg = redBox;
    } else if (estado === 'En viaje') {
      boxImg = yellowBox;
    } else if (estado === 'Pendiente') {
      boxImg = blueBox;
    }
  }

  cambiarImg();

  return (
    <Box style={{ marginTop: '5%' }}>
      <Grid container spacing={2}>
        <Grid item style={{ alignItems: 'center' }}>
          <img src={boxImg} alt="Reparto en curso" style={{ width: '70px' }} />
        </Grid>
        <Grid
          item
          xs={8}
          container
          spacing={1}
        >
          <Grid item xs>
            <Typography variant="body2" gutterBottom>
              {direccion}
            </Typography>
          </Grid>
          <Grid
            xs={4}
            container
            direction="column"
            spacing={2}
            justify="flex-end">
            <Grid item style={{ textAlign: 'right' }}>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="subtitle2" component="div">
                {estado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="inset" style={{ marginTop: '3%' }} />
    </Box>
  );
};

export default Card;
