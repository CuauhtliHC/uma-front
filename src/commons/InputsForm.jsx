import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { InputLabelCustom } from '../statics/styles/inputForm.jsx';

const InputsForm = ({
  labelText,
  inputType,
  errorsType,
  setData,
  textHelperForm,
}) => {
  return (
    <FormControl fullWidth={true}>
      <InputLabelCustom>
        {labelText}
      </InputLabelCustom>
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
