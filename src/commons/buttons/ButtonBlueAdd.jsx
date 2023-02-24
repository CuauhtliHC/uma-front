import React from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';

const ButtonBlueAdd = ({ handleSubmit }) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Button
        onClick={handleSubmit}
        sx={{
          backgroundColor: blue[500],
          marginTop: 2,
          borderRadius: '100%',
          width: '50px',
          height: '60px',
          boxShadow:
            '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
          color: 'white',
        }}
      >
        <AddIcon color="white" />
      </Button>
    </Box>
  );
};

export default ButtonBlueAdd;
