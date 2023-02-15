import React from 'react';
import {
  // List,
  // ListItem,
  // ListItemText,
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
          // style={{ alignItems: 'center' }}
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

      {/* <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}>
        <ListItem>
          <img
            src={yellowBox}
            alt="Reparto en curso"
            style={{ width: '60px' }}
          />

          <Typography fontSize={'13px'}>{direccion}</Typography>
          <Typography variant="subtitle2" fontSize={'14px'} align="rigth">
            {estado}
          </Typography>
        </ListItem>

        <Divider variant="inset" component="li" /> */}

      {/* <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List >
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid> */}

      {/* <ListItem>
          <img
            src={greenBox}
            alt="Reparto entregado"
            style={{ width: '60px' }}
          />

          <ListItemText secondary="Amenabar 2356, CABA" />
          <p>Entregado</p>
        </ListItem> */}
      {/* <Divider variant="inset" component="li" />
        <ListItem>
          <img
            src={greenBox}
            alt="Reparto entregado"
            style={{ width: '60px', height: 'auto' }}
          />

          <ListItemText secondary="Av Cerviño 3620, CABA" />
          <p>Entregado</p>
        </ListItem> */}
      {/* <Divider variant="inset" component="li" /> */}
      {/* </List> */}
    </Box>
  );
};

export default Card;
