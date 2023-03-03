import styled from '@mui/system/styled';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const PrincipalGrid = styled(Grid)({
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
});

const SecondGrid = styled(PrincipalGrid)({
  marginBottom: 0,
});

const AvatarProfile = styled(Avatar)({ width: 150, height: 150 });

const BoxButton = styled(Box)({ margin: '20px' });

const ButtonDelete = styled(Button)({ marginTop: '15px', backgroundColor: 'red' });

export {
  PrincipalGrid, SecondGrid, AvatarProfile, BoxButton, ButtonDelete,
};
