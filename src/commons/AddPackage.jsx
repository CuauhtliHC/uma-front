import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { useRecoilState } from 'recoil';
import { listPackage } from '../state/addingPackage.jsx';
import {
  IconButtonAdd, IconButtonRemove, MainBoxPackage, TextNum, TypographyDirection,
} from '../statics/styles/getPackage/addPackage.jsx';
import { addingToRecoil, addQuantity, removeQuantity } from '../utils/addPackageFunctions.jsx';

const AddPackage = ({ id, direction, maxQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);
  const [listPackages, setListPackages] = useRecoilState(listPackage);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    addingToRecoil(checked, listPackages, id, setListPackages, quantity);
  }, [quantity, checked]);

  return (
    <MainBoxPackage>
      <TypographyDirection>
        {direction}
      </TypographyDirection>
      <Box>
        <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={!checked && listPackages.total >= 10}
        />
        <IconButtonRemove
          onClick={() => {
            removeQuantity(setQuantity, quantity, checked, listPackages, id, setListPackages);
          }}
          disabled={quantity === 1}
        >
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
        <IconButtonAdd
          onClick={() => {
            addQuantity(setQuantity, quantity, checked, listPackages, id, setListPackages);
          }}
          disabled={quantity === maxQuantity || listPackages.total >= 10}
        >
          <Add />
        </IconButtonAdd>
      </Box>
    </MainBoxPackage>
  );
};

export default AddPackage;
