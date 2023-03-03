import React from 'react';
import {
  BlueButton,
  TypographyButton,
} from '../../statics/styles/button/blueButton.jsx';

const BlueLargeButton = ({ children, handleSubmit, total }) => {
  return (
    <BlueButton variant="contained" fullWidth onClick={handleSubmit} disabled={total > 10}>
      <TypographyButton>{children}</TypographyButton>
    </BlueButton>
  );
};

export default BlueLargeButton;
