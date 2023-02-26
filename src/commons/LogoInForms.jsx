import React from 'react';
import Logo from '../statics/images/logo.svg';
import { BoxImage, ImageLogo } from '../statics/styles/logoStyle.jsx';

const LogoInForms = () => {
  return (
      <BoxImage>
        <ImageLogo component="img" alt="Logo" src={Logo} />
      </BoxImage>
  );
};

export default LogoInForms;
