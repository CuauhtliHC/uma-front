import React from 'react';
import { ImgLogoNavBar } from '../../statics/styles/navbarStyle.jsx';
import logoFD from '../../statics/images/logoFastDelivery.jpeg';

const LogoNavBar = () => {
  return (
    <>
      <ImgLogoNavBar component="img" alt="Logo" src={logoFD} />
    </>
  );
};

export default LogoNavBar;
