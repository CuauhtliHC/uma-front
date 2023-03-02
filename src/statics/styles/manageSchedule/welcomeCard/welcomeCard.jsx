import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

const MdAvatar = styled(Avatar)({ height: '53px', width: '53px' });

const TypographyWelcome = styled(Typography)({ fontSize: '14px', fontWeight: 400 });

const TypographyTitle = styled(Typography)({ fontSize: '18px', fontWeight: 700 });

const SecondaryBox = styled(Box)({ paddingLeft: '18px' });

export {
  MdAvatar, TypographyWelcome, TypographyTitle, SecondaryBox,
};
