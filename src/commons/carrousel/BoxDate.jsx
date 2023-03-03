import React from 'react';
import {
  BlueBoxDate,
  YellowBoxDate,
} from '../../statics/styles/manageSchedule/carrousel/carrousel.jsx';

const BoxDate = ({ day, children }) => {
  return (
    <>
      {day.today ? (
        <YellowBoxDate>{children}</YellowBoxDate>
      ) : (
        <BlueBoxDate>{children}</BlueBoxDate>
      )}
    </>
  );
};

export default BoxDate;
