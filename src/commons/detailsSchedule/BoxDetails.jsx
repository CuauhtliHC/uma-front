import React from 'react';
import { Box } from '@mui/material';
import { SecondaryBox } from '../../statics/styles/manageSchedule/detailsSchedule/detailsCard.jsx';

const BoxDetails = ({ children, title }) => {
  return (
    <>
      {title === 'Repartidores' ? (
        <Box>{children}</Box>
      ) : (
        <SecondaryBox>{children}</SecondaryBox>
      )}
    </>
  );
};

export default BoxDetails;
