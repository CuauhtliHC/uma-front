import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import ProgressCircle from '../commons/detailsSchedule/ProgressCircle.jsx';
import {
  BoxMain,
  BoxDetails,
} from '../statics/styles/manageSchedule/detailsSchedule/detailsCard.jsx';

const DistributorsCard = ({
  name, status, percentage, avatar,
}) => {
  return (
    <Box style={{ marginTop: '55px' }}>
      <BoxMain>
        <ProgressCircle progress={percentage} />
        <BoxDetails>
          <Typography variant="body2" gutterBottom fontWeight="bold">
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            • {status}
          </Typography>
        </BoxDetails>
        <Avatar alt="name" src={avatar} sx={{ width: 50, height: 50 }} />
      </BoxMain>
    </Box>
  );
};

export default DistributorsCard;
