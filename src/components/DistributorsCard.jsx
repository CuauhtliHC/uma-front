import React from 'react';
import Typography from '@mui/material/Typography';
import ProgressCircle from '../commons/detailsSchedule/ProgressCircleWithColor.jsx';
import {
  BoxMain,
  BoxDetails,
} from '../statics/styles/manageSchedule/detailsSchedule/detailsCard.jsx';
import { AvatarDistributorCard, MainBoxCardDistributors, TypographyName } from '../statics/styles/distributors/distributorsCardStyle.jsx';
import { handleColorProgressBar, handleColorStatus } from '../utils/circleProgressFunctions.jsx';

const DistributorsCard = ({
  name, status, percentage, avatar,
}) => {
  return (
    <MainBoxCardDistributors>
      <BoxMain>
        <ProgressCircle
          progress={percentage}
          progressColor={handleColorProgressBar(percentage)}
        />
        <BoxDetails>
          <TypographyName variant="body2" gutterBottom>
            {name}
          </TypographyName>
          <Typography gutterBottom variant="subtitle2" component="div" color={handleColorStatus(status)}>
            • {status}
          </Typography>
        </BoxDetails>
      </BoxMain>
      <BoxMain>
        <AvatarDistributorCard alt="name" src={avatar} />
      </BoxMain>
    </MainBoxCardDistributors>
  );
};

export default DistributorsCard;
