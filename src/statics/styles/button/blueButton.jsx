import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const BlueButton = styled(Button)({
  borderRadius: '4px',
  boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  marginTop: '10px',
});

const TypographyButton = styled(Typography)({
  color: 'white',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '15px',
});

export { BlueButton, TypographyButton };
