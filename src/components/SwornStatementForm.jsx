import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from '@mui/material';
import axios from 'axios';
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';

const publicUrl = process.env.REACT_APP_URL_BACKEND;

const SwornStatementForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstAnswer: null,
      secondAnswer: null,
      thirdAnswer: null,
    },
  });

  function onSubmit(data) {
    const resultForm = {
      firstAnswer: data.firstAnswer === 'true',
      secondAnswer: data.secondAnswer === 'true',
      thirdAnswer: data.thirdAnswer === 'true',
    };

    axios
      .post(`${publicUrl}swornStatement/`, resultForm)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <FormControl fullWidth={true}>
      <FormLabel>
        ¿Usted consumió bebidas alcohólicas en las últimas 12 horas?
      </FormLabel>
      {errors.firstAnswer?.type === 'required' && (
        <Typography
          color="error"
          variant="overline"
          display="block"
          gutterBottom>
          Debe responder esta pregunta
        </Typography>
      )}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel
          value={true}
          control={<Radio />}
          label="Si"
          {...register('firstAnswer', { required: true })}
        />
        <FormControlLabel
          value={false}
          control={<Radio />}
          label="No"
          {...register('firstAnswer', { required: true })}
        />
      </RadioGroup>
      <FormLabel>
        ¿Usted está haciendo uso de medicamentos psicoactivos? (Antigripales,
        ansiolíticos, antidepresivos, sedantes y/o antialérgicos)
      </FormLabel>
      {errors.secondAnswer?.type === 'required' && (
        <Typography
          color="error"
          variant="overline"
          display="block"
          gutterBottom>
          Debe responder esta pregunta
        </Typography>
      )}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel
          value={true}
          control={<Radio />}
          label="Si"
          {...register('secondAnswer', { required: true })}
        />
        <FormControlLabel
          value={false}
          control={<Radio />}
          label="No"
          {...register('secondAnswer', { required: true })}
        />
      </RadioGroup>

      <FormLabel>
        ¿Tiene usted algun problema familiar, emocional o de cualquier tipo que
        lo distraiga?
      </FormLabel>
      {errors.thirdAnswer?.type === 'required' && (
        <Typography
          color="error"
          variant="overline"
          display="block"
          gutterBottom>
          Debe responder esta pregunta
        </Typography>
      )}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel
          value={true}
          control={<Radio />}
          label="Si"
          {...register('thirdAnswer', { required: true })}
        />
        <FormControlLabel
          value={false}
          control={<Radio />}
          label="No"
          {...register('thirdAnswer', { required: true })}
        />
      </RadioGroup>
      <BlueLargeButton type="submit" handleSubmit={handleSubmit(onSubmit)}>
        Enviar DDJJ y continuar
      </BlueLargeButton>
    </FormControl>
  );
};

export default SwornStatementForm;
