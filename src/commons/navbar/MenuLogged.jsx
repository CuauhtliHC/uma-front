import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { user } from '../../state/user.jsx';
import avatarImg from '../../statics/images/avatar.png';
import {
  AvatarNavBar,
  IconButtonAvatar,
  MenuNavBar,
  TypographyMenu,
} from '../../statics/styles/navbarStyle.jsx';

const MenuLogged = () => {
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
    <>
      <Tooltip title="Open settings">
        <IconButtonAvatar onClick={handleOpenUserMenu}>
          <AvatarNavBar alt="foto de perfil" src={avatarImg} />
        </IconButtonAvatar>
      </Tooltip>
      <MenuNavBar
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
            <TypographyMenu>{setting.name}</TypographyMenu>
          </MenuItem>
        ))}
      </MenuNavBar>
    </>
  );
};

export default MenuLogged;
