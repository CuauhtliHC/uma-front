import {
  Box,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { listPackage } from '../state/addingPackage.jsx';

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
    <Box
      width="330px"
      marginTop="40px"
      boxShadow="0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)"
    >
      <Typography textAlign="center" fontWeight={400} fontSize="12px">
        {direction}
      </Typography>
      <Box>
        <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        disabled={!checked && listPackages.total === 10}
        />
        <IconButton
          sx={{
            border: '1px solid #B2BCCA',
            filter: 'drop-shadow(0px 2px 40px rgba(133, 133, 133, 0.08))',
            borderRadius: '3px',
            marginLeft: '70px',
            width: '29px',
            height: '29px',
          }}
          onClick={removeQuantity}
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
          onClick={addQuantity}
          disabled={quantity === maxQuantity || listPackages.total === 10}
        >
          <Add />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AddPackage;
