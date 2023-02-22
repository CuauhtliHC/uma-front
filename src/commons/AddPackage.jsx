import React, { useState, useEffect } from 'react';
import {
  Box,
  Checkbox,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useRecoilState } from 'recoil';
import { listPackage } from '../state/addingPackage.jsx';
import {
  IconButtonAdd, IconButtonRemove, MainBoxPackage, TextNum, TypographyDirection,
} from '../statics/styles/getPackage/addPackage.jsx';

const AddPackage = ({ id, direction, maxQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(false);
  const [listPackages, setListPackages] = useRecoilState(listPackage);

  const removeQuantity = () => {
    setQuantity(quantity - 1);
    if (checked && listPackages.list.find((pkg) => pkg.id === id)) {
      setListPackages((packages) => {
        const list = packages.list.map((pkg) => (pkg.id === id ? { id, quantity } : pkg));
        return { total: packages.total - 1, list };
      });
    }
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
    if (checked && listPackages.list.find((pkg) => pkg.id === id)) {
      setListPackages((packages) => {
        const list = packages.list.map((pkg) => (pkg.id === id ? { id, quantity } : pkg));
        return { total: packages.total + 1, list };
      });
    }
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (checked && !listPackages.list.find((pkg) => pkg.id === id)) {
      setListPackages((packages) => {
        return { total: packages.total + quantity, list: [...packages.list, { id, quantity }] };
      });
    } else if (!checked && listPackages.list.find((pkg) => pkg.id === id)) {
      setListPackages((packages) => {
        return {
          total: packages.total - quantity, list: packages?.list.filter((pkg) => pkg.id !== id),
        };
      });
    }
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
          onClick={removeQuantity}
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
          onClick={addQuantity}
          disabled={quantity === maxQuantity || listPackages.total >= 10}
        >
          <Add />
        </IconButtonAdd>
      </Box>
    </MainBoxPackage>
  );
};

export default AddPackage;
