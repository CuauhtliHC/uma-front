import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const BoxMain = styled(Box)({ position: 'relative', display: 'inline-flex' });

const BoxInter = styled(Box)({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '74px',
  width: '74px',
});

const TypographyProgress = styled(Typography)({ fontSize: '16px', fontWeight: 700 });

export {
  BoxMain, BoxInter, TypographyProgress,
};
