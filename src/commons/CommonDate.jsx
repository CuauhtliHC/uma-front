import { Box, Typography } from '@mui/material';
import React from 'react';

const CommonDate = ({ day }) => {
  const backgroundC = day.today ? '#FCBC11' : '#217BCE';
  const hg = day.today ? '127px' : '99px';
  const mtop = day.today ? 0 : 2;
  return (
    <Box
      width="61px"
      height={hg}
      borderRadius="40px"
      bgcolor={backgroundC}
      flex="0 0 15%"
      minWidth={0}
      marginLeft={'14px'}
      alignContent="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={mtop}
    >
      <Box>
        <Typography textAlign='center' fontWeight={700} color='white' fontSize='24px' lineHeight='28px'>{day.numDay}</Typography>
        <Typography textAlign='center' color='white' fontSize='14px' lineHeight='16px' textTransform='capitalize'>{day.day}</Typography>
      </Box>
    </Box>
  );
};

export default CommonDate;
