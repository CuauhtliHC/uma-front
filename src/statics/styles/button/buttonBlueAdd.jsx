import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import blue from '@mui/material/colors/blue';
import styled from '@mui/system/styled';
import AddIcon from '@mui/icons-material/Add';

const MainBoxButtonAdd = styled(Box)({ display: 'flex', justifyContent: 'flex-end' });

const ButtonAdd = styled(Button)({
  backgroundColor: blue[500],
  marginTop: '20px',
  borderRadius: '100%',
  width: '50px',
  height: '60px',
  boxShadow:
      '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  color: 'white',
});

const IconAdd = styled(AddIcon)({ color: 'white' });

export { ButtonAdd, MainBoxButtonAdd, IconAdd };
