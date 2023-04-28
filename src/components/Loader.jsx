import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = ({ size = 40, color = 'primary', visible = true }) => {
  return visible ? <CircularProgress size={size} color={color} /> : null;
};

export default Loader;
