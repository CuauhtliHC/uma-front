import React from 'react';
import { FormControl, InputLabel, Input } from '@mui/material';

const InputAddPacket = ({
  labelText, inputType, handleChange, name,
}) => {
  return (
    <FormControl fullWidth={true}>
      <InputLabel style={{ fontSize: '17px', color: '#FEBC14', margin: 0 }}>
        {labelText}
      </InputLabel>
      <Input type={inputType} name={name} onChange={handleChange} />
    </FormControl>
  );
};

export default InputAddPacket;
