import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

const ContainerBar = styled(AppBar)({ backgroundColor: 'white' });

const MainBoxNavBar = styled(Box)({ width: '100%', display: 'flex', justifyContent: 'space-between' });

const ImgLogoNavBar = styled(Box)({ width: '50px', height: 'auto' });

const IconButtonAvatar = styled(IconButton)({ padding: 0 });

const AvatarNavBar = styled(Avatar)({ width: '35px', height: '35px' });

const MenuNavBar = styled(Menu)({ marginTop: '40px' });

const TypographyMenu = styled(Typography)({ textAlign: 'center' });

export {
  ContainerBar,
  MainBoxNavBar,
  ImgLogoNavBar,
  IconButtonAvatar,
  AvatarNavBar,
  MenuNavBar,
  TypographyMenu,
};
