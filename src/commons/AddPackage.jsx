import {
  Box,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import React, { useState } from 'react';

const AddPackage = ({ dataPackage }) => {
  const [quantity, setQuantity] = useState(1);
  const removePackage = () => {
    setQuantity(quantity - 1);
  };

  const addPackage = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Box
      width="330px"
      marginTop="40px"
      boxShadow="0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)"
    >
      <Typography textAlign="center" fontWeight={400} fontSize="12px">
        {dataPackage.direction}
      </Typography>
      <Box>
        <Checkbox />
        <IconButton
          sx={{
            border: '1px solid #B2BCCA',
            filter: 'drop-shadow(0px 2px 40px rgba(133, 133, 133, 0.08))',
            borderRadius: '3px',
            marginLeft: '70px',
            width: '29px',
            height: '29px',
          }}
          onClick={removePackage}
          disabled={quantity === 1}
        >
          <Remove />
        </IconButton>
        <TextField
          type="number"
          value={quantity}
          sx={{
            width: '29px',
            height: '29px',
            textAlign: 'center',
            padding: '8px 8px 8px 8px',
            alignItems: 'center',
            justifyContent: 'center',
            '& input': {
              textAlign: 'center',
            },
          }}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
        <IconButton
          sx={{
            border: '1px solid #B2BCCA',
            filter: 'drop-shadow(0px 2px 40px rgba(133, 133, 133, 0.08))',
            borderRadius: '3px',
            width: '29px',
            height: '29px',
          }}
          onClick={addPackage}
          disabled={quantity === dataPackage.maxQuantity}
        >
          <Add />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AddPackage;
