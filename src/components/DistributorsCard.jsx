import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import ProgressCircle from '../commons/detailsSchedule/ProgressCircleWithColor.jsx';
import {
  BoxMain,
  BoxDetails,
} from '../statics/styles/manageSchedule/detailsSchedule/detailsCard.jsx';

const DistributorsCard = ({
  name, status, percentage, avatar,
}) => {
  const handleColorProgressBar = (progress) => {
    console.log(typeof progress);
    if (progress < 50) {
      return '#FF6B6B';
    }
    if (progress < 100 && progress >= 50) {
      return '#FCBC11';
    }
    if (progress === 100) {
      return '#96DB76';
    }
  };

  const handleColorStatus = (Status) => {
    if (Status === 'Inactivo') {
      return '#FF6B6B';
    }
    if (Status === 'Viaje en curso') {
      return '#217BCE';
    }
    if (Status === 'Finalizó') {
      return '#96DB76';
    }
  };

  return (
    <Box
      justifyContent="space-between"
      sx={{ width: '100%', display: 'flex', marginTop: '55px' }}>
      <BoxMain>
        <ProgressCircle
          progress={percentage}
          progressColor={() => handleColorProgressBar(percentage)}
        />
        <BoxDetails>
          <Typography variant="body2" gutterBottom fontWeight="bold">
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div" color={handleColorStatus(status)}>
            • {status}
          </Typography>
        </BoxDetails>
      </BoxMain>
      <BoxMain>
        <Avatar alt="name" src={avatar} sx={{ width: 50, height: 50 }} />
      </BoxMain>
    </Box>
  );
};

export default DistributorsCard;
