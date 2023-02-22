import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BoxMain = styled(Box)({ overflow: 'hidden', marginTop: '37px' });

const TypographyNumDay = styled(Typography)({
  fontSize: '24px',
  fontWeight: 700,
  textAlign: 'center',
  color: 'white',
  lineHeight: '28px',
});

const TypographyDay = styled(Typography)({
  fontSize: '14px',
  textAlign: 'center',
  color: 'white',
  lineHeight: '16px',
  textTransform: 'capitalize',
});

const SecondaryBox = styled(Box)({ display: 'flex' });

const BlueBoxDate = styled(Box)({
  display: 'flex',
  backgroundColor: '#217BCE',
  height: '99px',
  marginTop: 2,
  width: '61px',
  borderRadius: '40px',
  flex: '0 0 15%',
  minWidth: 0,
  marginLeft: '14px',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
});

const YellowBoxDate = styled(BlueBoxDate)({
  backgroundColor: '#FCBC11',
  height: '127px',
  marginTop: 0,
});

export {
  BoxMain,
  TypographyNumDay,
  SecondaryBox,
  TypographyDay,
  BlueBoxDate,
  YellowBoxDate,
};
