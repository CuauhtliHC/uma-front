import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CircularProgressWithLabel = (props) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} size='74px'/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '74px',
          width: '74px',
        }}
      >
        <Typography component="div" fontSize='16px' fontWeight={700}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
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
