import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import red from '@mui/material/colors/red';
import styled from '@mui/system/styled';

const TitleGetPackage = styled(Typography)({ fontWeight: 700, fontSize: '16px' });

const SubtitleGetPackage = styled(Typography)({ fontWeight: 400, fontSize: '12px' });

const WarningTypography = styled(SubtitleGetPackage)({ color: red[800] });

const MainBox = styled(Box)({ marginTop: '38px', marginBottom: '20px' });

export {
  TitleGetPackage, SubtitleGetPackage, MainBox, WarningTypography,
};
