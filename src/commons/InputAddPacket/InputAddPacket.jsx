import React from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { InputLabelCustom } from '../../statics/styles/inputForm.jsx';

const InputAddPacket = ({
  labelText, inputType, handleChange, name,
}) => {
  return (
    <FormControl fullWidth={true}>
      <InputLabelCustom>
        {labelText}
      </InputLabelCustom>
      <Input type={inputType} name={name} onChange={handleChange} />
    </FormControl>
  );
};

export default InputAddPacket;
