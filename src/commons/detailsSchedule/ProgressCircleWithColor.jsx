import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import {
  BoxInter,
  BoxMain,
  TypographyProgress,
} from '../../statics/styles/circleProgress/circle.jsx';

const CircularProgressWithLabel = (props) => {
  const { progressColor, ...restProps } = props;
  const sx = { '& .MuiCircularProgress-circle': { stroke: progressColor } };

  return (
    <BoxMain>
      <CircularProgress
        variant="determinate"
        sx={sx}
        {...restProps}
        size="74px"
      />
      <BoxInter>
        <TypographyProgress component="div">
          {`${Math.round(props.value)}%`}
        </TypographyProgress>
      </BoxInter>
    </BoxMain>
  );
};

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  progressColor: PropTypes.string.isRequired,
};

const ProgressCircle = ({ progress, progressColor }) => {
  return (
    <CircularProgressWithLabel value={progress} progressColor={progressColor} />
  );
};

ProgressCircle.propTypes = {
  progress: PropTypes.number.isRequired,
  progressColor: PropTypes.string.isRequired,
};

export default ProgressCircle;
