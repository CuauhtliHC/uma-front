import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

const TypographyDirection = styled(Typography)({
  fontWeight: 400,
  fontSize: '12px',
  textAlign: 'center',
});

const MainBoxPackage = styled(Box)({
  marginTop: '40px',
  width: '100%',
  boxShadow:
    '0 2px 2px -1px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14)',
});

const IconButtonAdd = styled(IconButton)({
  border: '1px solid #B2BCCA',
  filter: 'drop-shadow(0px 2px 40px rgba(133, 133, 133, 0.08))',
  borderRadius: '3px',
  width: '29px',
  height: '29px',
});

const IconButtonRemove = styled(IconButtonAdd)({
  marginLeft: '70px',
});

const TextNum = styled(TextField)({
  width: '29px',
  height: '29px',
  textAlign: 'center',
  padding: '8px 8px 8px 8px',
  alignItems: 'center',
  justifyContent: 'center',
  '& input': { textAlign: 'center' },
});

const BoxInForm = styled(Box)({ display: 'flex', alignItems: 'center' });

export {
  TypographyDirection,
  MainBoxPackage,
  IconButtonRemove,
  IconButtonAdd,
  TextNum,
  BoxInForm,
};
