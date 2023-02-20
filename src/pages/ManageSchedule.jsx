import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Typography,
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DatesCarousel from '../components/DatesCarousel.jsx';
import ProgressCircle from '../commons/ProgressCircle.jsx';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';

const ManageSchedule = () => {
  return (
    <Box>
      <Box display="flex">
        <Avatar sx={{ height: '53px', width: '53px' }} />
        <Box paddingLeft="18px">
          <Typography fontWeight={400} fontSize="14px">
            Hola Admin!
          </Typography>
          <Typography fontWeight={700} fontSize="18px">
            Gestionar Pedidos
          </Typography>
        </Box>
      </Box>
      <DatesCarousel />
      <Accordion className="accordionWorkday">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize="16px" fontWeight={700}>
            15/02/23 - Detalles
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box display="flex">
              <ProgressCircle progress={22} />
              <Box ml="21px">
                <Typography fontSize="16px" fontWeight={700}>
                  Repartidores
                </Typography>
                <Typography fontSize="13px" fontWeight={400}>
                  2/10 activos
                </Typography>
              </Box>
            </Box>
            <BlueLargeButton>Ver Repartidores</BlueLargeButton>
          </Box>
          <Box mt="29px">
            <Box display="flex">
              <ProgressCircle progress={80} />
              <Box ml="21px">
                <Typography fontSize="16px" fontWeight={700}>
                  Paquetes
                </Typography>
                <Typography fontSize="13px" fontWeight={400}>
                  16/20 repartidos
                </Typography>
              </Box>
            </Box>
            <BlueLargeButton>Ver Paquetes</BlueLargeButton>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ManageSchedule;
