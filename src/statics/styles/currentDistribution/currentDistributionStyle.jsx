import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from '@mui/system/styled';

const MainBoxDistribution = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
  width: '100%',
  color: '#4F4F4F',
});

const SecondBox = styled(Box)({
  width: '321px',
  height: '430px',
  backgroundColor: 'white',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.14)',
  borderRaduis: '4px',
  padding: '20px 20px 0 20px',
});

const TitleDistribution = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'black',
});

const BoxList = styled(Box)({ margin: 0, padding: 0 });

const BoxTypography = styled(Box)({
  display: 'flex',
});

const SecondTypography = styled(Typography)({
  fontSize: '14px',
});

const FirstTypography = styled(SecondTypography)({
  display: 'inline',
  marginRight: '3px',
});

const BoxButton = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
  marginTop: '10px',
});

const ButtonFinish = styled(Button)({
  padding: '2px 16px',
  backgroundColor: '#217BCE',
  color: 'white',
  boxShadow:
    '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
  borderRadius: '4px',
  fontWeight: 500,
  fontSize: '15px',
});

const containerStyle = {
  position: 'relative',
  width: '75vw',
  height: '40vh',
  margin: '10px 0px',
};

export {
  MainBoxDistribution,
  SecondBox,
  TitleDistribution,
  BoxList,
  FirstTypography,
  SecondTypography,
  BoxTypography,
  BoxButton,
  ButtonFinish,
  containerStyle,
};
