import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BlueBoxDate,
  YellowBoxDate,
} from '../../statics/styles/manageSchedule/carrousel/carrousel.jsx';

const BoxDate = ({ dayDescription, children }) => {
  const { day } = useParams();
  const navigate = useNavigate();
  return (
    <>
      {dayDescription.formatDate === day ? (
        <YellowBoxDate>{children}</YellowBoxDate>
      ) : (
        <BlueBoxDate onClick={() => navigate(`/gestionar_agenda/${dayDescription.formatDate}`)}>{children}</BlueBoxDate>
      )}
    </>
  );
};

export default BoxDate;
