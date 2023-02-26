import { Box } from '@mui/material';
import { styled } from '@mui/system';

const BoxImage = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '12vh',
});

const ImageLogo = styled(Box)({ width: '50%', height: '50%' });

export {
  BoxImage,
  ImageLogo,
};
