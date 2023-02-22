import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import Distributors from '../components/Distributors.jsx';
import BackButton from '../commons/buttons/BackButton.jsx';

const ManageDistributors = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackButton handleSubmit={() => navigate('/gestionar_agenda')} />
      <Distributors />
    </>
  );
};

export default ManageDistributors;
