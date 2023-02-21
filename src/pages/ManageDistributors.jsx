import { IconButton } from '@mui/material';
import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Distributors from '../components/Distributors.jsx';

const ManageDistributors = () => {
  return (
    <>
      <IconButton sx={{ margin: '0.5vw' }}>
        <ArrowBackIosNewIcon
          sx={{ width: '26px', height: '26px', color: 'black' }}
        />
      </IconButton>
      <Distributors />
    </>
  );
};

export default ManageDistributors;
