import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/system';

const TitleGetPackage = styled(Typography)({ fontWeight: 700, fontSize: '16px' });

const SubtitleGetPackage = styled(Typography)({ fontWeight: 400, fontSize: '12px' });

const WarningTypography = styled(SubtitleGetPackage)({ color: red[800] });

const MainBox = styled(Box)({ marginTop: '38px' });

export {
  TitleGetPackage, SubtitleGetPackage, MainBox, WarningTypography,
};
