import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const MainBoxCardDistributors = styled(Box)({
  marginTop: '55px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});

const AvatarDistributorCard = styled(Avatar)({ width: '50px', height: '50px' });

const TypographyName = styled(Typography)({ fontWeight: 'bold' });

export { MainBoxCardDistributors, AvatarDistributorCard, TypographyName };
