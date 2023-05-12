import React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { InputDate } from '../../statics/styles/AddPackageAdmin/formStyle.jsx';

export default function ViewsDatePicker({
  labelText, handleChange, name, value,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack>
        <InputDate
          MuiInputProps={{ className: 'customDatePickerInput' }}
          minDate={dayjs().add(0, 'day').format('YYYY-MM-DD')}
          label={labelText}
          value={value}
          onChange={handleChange}
          name={name}
          renderInput={(params) => (
            <TextField
              name={name}
              {...params}
              helperText={null}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
