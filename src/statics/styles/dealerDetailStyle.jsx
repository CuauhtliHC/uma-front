import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PrincipalBox = styled(Box)({ marginTop: '5%' });

const PaperDetail = styled(Paper)({ margin: '2%', padding: '4%' });

const TypographyName = styled(Typography)({ fontWeight: 'bold', fontSize: 20 });

const GridButtonActive = styled(Grid)({ textAlign: 'right' });

export {
  PrincipalBox, PaperDetail, TypographyName, GridButtonActive,
};
