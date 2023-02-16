import {
  AppBar,
  Avatar,
  Box,
  Container,
  // Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import avatarImg from '../statics/images/avatar.png';
import logoFD from '../statics/images/logoFastDelivery.jpeg';

const Navbar = () => {
  const settings = ['Perfil', 'Cerrar Sesion'];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar sx={{ backgroundColor: 'white' }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            justifyContent="space-between"
            container
            sx={{ width: '100%', display: 'flex' }}>
            <Box item>
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
            <Box item>
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
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
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
