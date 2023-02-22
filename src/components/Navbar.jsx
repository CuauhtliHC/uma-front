import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { user } from '../state/user.jsx';
import avatarImg from '../statics/images/avatar.png';
import logoFD from '../statics/images/logoFastDelivery.jpeg';

const Navbar = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(user);
  const settings = [
    { name: 'Perfil', link: '/mi_perfil' },
    { name: 'Cerrar Sesion', link: '/logout' },
  ];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting.name === 'Cerrar Sesion') {
      localStorage.removeItem('User');
      setUser(null);
      navigate('/login');
    } else if (setting.name === 'Perfil') {
      navigate(setting.link);
    }
  };
  return (
    <AppBar sx={{ backgroundColor: 'white' }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            justifyContent="space-between"
            sx={{ width: '100%', display: 'flex' }}
          >
            <Box>
              <Box
                component="img"
                sx={{
                  width: '50px',
                  height: 'auto',
                }}
                alt="Logo"
                src={logoFD}
              />
            </Box>
            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="foto de perfil"
                    src={avatarImg}
                    sx={{ width: '35px', height: '35px' }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '40px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
