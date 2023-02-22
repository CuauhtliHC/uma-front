import React from 'react';
import {
  BlueButton,
  TypographyButton,
} from '../../statics/styles/button/blueButton.jsx';

const BlueLargeButton = ({ children, handleSubmit }) => {
  return (
    <BlueButton variant="contained" fullWidth onClick={handleSubmit}>
      <TypographyButton>{children}</TypographyButton>
    </BlueButton>
  );
};

export default BlueLargeButton;
