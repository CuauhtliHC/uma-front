import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const MainBoxCard = styled(Box)({ marginTop: '5%' });

const StatusTypography = styled(Typography)({ textAlign: 'right' });

const DividerCard = styled(Divider)({ marginTop: '3%' });

const GridRightItem = styled(Grid)({ textAlign: 'right' });

const GridRightContainer = styled(Grid)({
  justifyContent: 'flex-end',
  direction: 'column',
});

const GridCenterItem = styled(Grid)({ alignItems: 'center' });

const ImgPackage = styled(Box)({ width: '70px' });

export {
  MainBoxCard,
  StatusTypography,
  DividerCard,
  GridRightItem,
  GridRightContainer,
  GridCenterItem,
  ImgPackage,
};
