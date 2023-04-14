import React from 'react';
import {
  Typography,
} from '@mui/material';
import SwornStatementForm from '../components/SwornStatementForm.jsx';

const SwornStatement = () => {
  return (
    <>
      <Typography variant="subtitle2" gutterBottom>
        Declaración Jurada
      </Typography>
     <SwornStatementForm />
    </>
  );
};

export default SwornStatement;
