import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Typography,
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DatesCarousel from '../components/DatesCarousel.jsx';
import ProgressCircle from '../commons/ProgressCircle.jsx';

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
          <Typography fontSize='16px' fontWeight={700}>15/02/23 - Detalles</Typography>
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
            <Button
              sx={{
                borderRadius: '4px',
                marginTop: '10px',
                boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
              }}
              variant="contained"
              fullWidth
            >
              <Typography
                color="white"
                fontStyle="normal"
                fontWeight={500}
                fontSize="15px"
              >
                Ver Repartidores
              </Typography>
            </Button>
          </Box>
          <Box mt='29px'>
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
            <Button
              sx={{
                borderRadius: '4px',
                marginTop: '10px',
                boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
              }}
              variant="contained"
              fullWidth
            >
              <Typography
                color="white"
                fontStyle="normal"
                fontWeight={500}
                fontSize="15px"
              >
                Ver Paquetes
              </Typography>
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ManageSchedule;
