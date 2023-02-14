import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';

import redBox from '../statics/images/caja-roja.png';
import greenBox from '../statics/images/caja-verde.png';
import yellowBox from '../statics/images/caja-amarilla.png';

const Card = () => {
  return (
    <div>
      <List
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

          <Typography fontFamily={'Roboto'}>Mendoza 1810, CABA</Typography>
          <Typography>En curso</Typography>
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem>
          <img
            src={greenBox}
            alt="Reparto entregado"
            style={{ width: '60px' }}
          />

          <ListItemText secondary="Amenabar 2356, CABA" />
          <p>Entregado</p>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <img
            src={greenBox}
            alt="Reparto entregado"
            style={{ width: '60px', height: 'auto' }}
          />

          <ListItemText secondary="Av Cerviño 3620, CABA" />
          <p>Entregado</p>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <img
            src={greenBox}
            alt="Reparto entregado"
            style={{ width: '60px', height: 'auto' }}
          />

          <ListItemText secondary="Juncal 2110, CABA" />
          <p>Entregado</p>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <img
            src={redBox}
            alt="Reparto cancelada"
            style={{ width: '60px', height: 'auto' }}
          />

          <ListItemText secondary="Av. Carabobo y Rivadavia, CABA" />
          <p>Cancelado</p>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <img
            src={greenBox}
            alt="Reparto entregado"
            style={{ width: '60px', height: 'auto' }}
          />

          <ListItemText secondary="Rosario 623, CABA" />
          <p>Entregado</p>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <img
            src={greenBox}
            alt="Reparto entrgado"
            style={{ width: '60px', height: 'auto' }}
          />

          <ListItemText secondary="Santa Fe 4567, CABA" />
          <p>Entregado</p>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
};

export default Card;
