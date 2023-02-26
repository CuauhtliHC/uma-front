import React from 'react';
import {
  ArrowIcon,
  IconBackButton,
} from '../../statics/styles/button/backButton.jsx';

const BackButton = ({ handleSubmit }) => {
  return (
    <IconBackButton onClick={handleSubmit}>
      <ArrowIcon />
    </IconBackButton>
  );
};

export default BackButton;
