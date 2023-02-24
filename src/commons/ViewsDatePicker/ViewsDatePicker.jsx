import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import './style.css';

export default function ViewsDatePicker({
  labelText, handleChange, name, value,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack>
        <DatePicker
          className="customDatePicker"
          MuiInputProps={{ className: 'customDatePickerInput' }}
          minDate={dayjs().add(1, 'day').format('YYYY-MM-DD')}
          label={labelText}
          value={value}
          onChange={handleChange}
          name={name}
          renderInput={(params) => (
            <TextField
              name={name}
              InputLabelProps={{ className: 'customDatePickerInput' }}
              {...params}
              helperText={null}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
