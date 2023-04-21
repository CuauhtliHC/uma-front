import React from 'react';
import { useNavigate } from 'react-router';
import Distributors from '../components/Distributors.jsx';
import BackButton from '../commons/buttons/BackButton.jsx';
import { dateFormat } from '../utils/today.jsx';

const ManageDistributors = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackButton handleSubmit={() => navigate(`/gestionar_agenda/${dateFormat}`)} />
      <Distributors />
    </>
  );
};

export default ManageDistributors;
