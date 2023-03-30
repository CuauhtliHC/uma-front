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
import BlueLargeButton from '../commons/buttons/BlueLargeButton.jsx';

const DDJJforms = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      Consumió_Alcohol: null,
      Consumió_Medicamentos: null,
      Problemas_Emocionales: null,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Typography variant="subtitle2" gutterBottom>
Declaración Jurada
</Typography>
<FormControl fullWidth={true} onSubmit={handleSubmit(onSubmit)}>
<FormLabel>
¿Usted consumió bebidas alcohólicas en las últimas 12 horas?
</FormLabel>
{errors.Consumió_Alcohol?.type === 'required' && <Typography color="error" variant="overline" display="block" gutterBottom>Debe responder esta pregunta</Typography>}
<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
name="row-radio-buttons-group">

<FormControlLabel value={true} control={<Radio />} label="Si" {...register('Consumió_Alcohol', { required: true })}/>
<FormControlLabel value={false} control={<Radio />} label="No" {...register('Consumió_Alcohol', { required: true })} />
</RadioGroup>
<FormLabel>
¿Usted está haciendo uso de medicamentos psicoactivos? (Antigripales,
ansiolíticos, antidepresivos, sedantes y/o antialérgicos)
</FormLabel>
{errors.Consumió_Medicamentos?.type === 'required' && <Typography color="error" variant="overline" display="block" gutterBottom>Debe responder esta pregunta</Typography>}
<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
name="row-radio-buttons-group">
<FormControlLabel value={true} control={<Radio />} label="Si" {...register('Consumió_Medicamentos', { required: true })}/>
<FormControlLabel value={false} control={<Radio />} label="No" {...register('Consumió_Medicamentos', { required: true })}/>
</RadioGroup>

<FormLabel>
¿Tiene usted algun problema familiar, emocional o de cualquier tipo
que lo distraiga?
</FormLabel>
{errors.Problemas_Emocionales?.type === 'required' && <Typography color="error" variant="overline" display="block" gutterBottom>Debe responder esta pregunta</Typography>}
<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
name="row-radio-buttons-group">
<FormControlLabel value={true} control={<Radio />} label="Si" {...register('Problemas_Emocionales', { required: true })}/>
<FormControlLabel value={false} control={<Radio />} label="No" {...register('Problemas_Emocionales', { required: true })}/>
</RadioGroup>
<BlueLargeButton type="submit" handleSubmit={handleSubmit(onSubmit)}>
  Enviar DDJJ y continuar
  </BlueLargeButton>
</FormControl>
    </>
  );
};

export default DDJJforms;
