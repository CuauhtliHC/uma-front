import React from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { ContainerBar, MainBoxNavBar } from '../statics/styles/navbarStyle.jsx';
import LogoNavBar from '../commons/navbar/LogoNavBar.jsx';
import MenuLogged from '../commons/navbar/MenuLogged.jsx';

const Navbar = () => {
  return (
    <ContainerBar>
      <Container>
        <Toolbar disableGutters>
          <MainBoxNavBar>
            <LogoNavBar />
            <MenuLogged />
          </MainBoxNavBar>
        </Toolbar>
      </Container>
    </ContainerBar>
  );
};

export default Navbar;
