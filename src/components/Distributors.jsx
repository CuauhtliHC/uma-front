import React, { useState } from 'react';
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
import more from '../statics/images/more.png';

const Distributors = () => {
  const [showCount, setShowCount] = useState(3);

  const handleShowMore = () => {
    setShowCount(showCount + 3);
  };

  return (
    <Box sx={{ margin: '5vw' }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Repartidores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {repartidoresFake.slice(0, showCount).map((data) => (
            <DistributorsCard
              key={data.id}
              name={data.name}
              status={data.status}
              percentage={data.percentage}
              avatar={data.img}
            />
          ))}
          {showCount < repartidoresFake.length && (
            <img src={more} alt='more' onClick={handleShowMore} style={{ marginLeft: '50%' }} />
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Distributors;
