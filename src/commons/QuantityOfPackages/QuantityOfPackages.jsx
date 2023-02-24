import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import {
  IconButtonAdd,
  IconButtonRemove,
  TextNum,
} from '../../statics/styles/getPackage/addPackage.jsx';

const QuantityOfPackages = () => {
  const [quantity, setQuantity] = useState(1);

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Box display={'flex'} alignItems="center">
      <IconButtonRemove style={{ margin: 0 }} onClick={removeQuantity}>
        <Remove />
      </IconButtonRemove>
      <TextNum
        type="number"
        value={quantity}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      />
      <IconButtonAdd onClick={addQuantity}>
        <Add />
      </IconButtonAdd>
    </Box>
  );
};

export default QuantityOfPackages;
