import React from 'react';
import { Box } from '@mui/system';
import { TypographyDay, TypographyNumDay } from '../../statics/styles/manageSchedule/carrousel/carrousel.jsx';

const Dates = ({ day }) => {
  return (
      <Box>
        <TypographyNumDay>{day.numDay}</TypographyNumDay>
        <TypographyDay>{day.day}</TypographyDay>
      </Box>
  );
};

export default Dates;
