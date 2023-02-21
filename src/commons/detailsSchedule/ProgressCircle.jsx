import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { BoxInter, BoxMain, TypographyProgress } from '../../statics/styles/circleProgress/circle.jsx';

const CircularProgressWithLabel = (props) => {
  return (
    <BoxMain>
      <CircularProgress variant="determinate" {...props} size='74px'/>
      <BoxInter>
        <TypographyProgress component="div">
          {`${Math.round(props.value)}%`}
        </TypographyProgress>
      </BoxInter>
    </BoxMain>
  );
};

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const ProgressCircle = ({ progress }) => {
  return <CircularProgressWithLabel value={progress} />;
};

export default ProgressCircle;
