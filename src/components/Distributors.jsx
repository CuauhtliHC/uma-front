import React from 'react';
import '../statics/styles/workday.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import repartidoresFake from '../statics/DummyData/repartidoresFake';
import DistributorsCard from './DistributorsCard.jsx';

const Distributors = () => {
  return (
    <Box sx={{ margin: '5vw' }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Repartidores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {repartidoresFake.map((data) => (
            <DistributorsCard
              key={data.id}
              name={data.name}
              status={data.status}
              percentage={data.percentage}
              avatar={data.img}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Distributors;
