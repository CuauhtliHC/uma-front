import React from 'react';
import {
  FormControl, InputLabel, Input, FormHelperText,
} from '@mui/material';

const InputsForm = ({
  labelText,
  inputType,
  errorsType,
  setData,
  textHelperForm,
}) => {
  return (
    <FormControl fullWidth={true}>
      <InputLabel style={{ fontSize: '17px', color: '#FEBC14' }}>
        {labelText}
      </InputLabel>
      <Input type={inputType} onChange={(e) => setData(e.target.value)} />
      {errorsType ? (
        <FormHelperText error>{errorsType}</FormHelperText>
      ) : (
        <FormHelperText>{textHelperForm}</FormHelperText>
      )}
    </FormControl>
  );
};

export default InputsForm;
