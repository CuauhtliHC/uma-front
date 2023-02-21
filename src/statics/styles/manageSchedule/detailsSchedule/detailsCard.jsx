import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BoxMain = styled(Box)({ display: 'flex' });

const BoxDetails = styled(Box)({ marginLeft: '21px' });

const TypographyDetails = styled(Typography)({ fontSize: '13px', fontWeight: 400 });

const SecondaryBox = styled(Box)({ marginTop: '29px' });

export {
  BoxMain, BoxDetails, TypographyDetails, SecondaryBox,
};
