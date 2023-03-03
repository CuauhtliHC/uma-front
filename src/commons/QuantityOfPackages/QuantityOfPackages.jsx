import React, { useState } from 'react';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import {
  BoxInForm,
  IconButtonAdd,
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
    <BoxInForm>
      <IconButtonAdd onClick={removeQuantity} disabled={quantity < 2}>
        <Remove />
      </IconButtonAdd>
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
    </BoxInForm>
  );
};

export default QuantityOfPackages;
