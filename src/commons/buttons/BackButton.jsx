import React from 'react';
import {
  ArrowIcon,
  IconBackButton,
} from '../../statics/styles/button/backButton.jsx';

const BackButton = ({ handleSubmit }) => {
  return (
    <IconBackButton sx={{ margin: '0.5vw' }} onClick={handleSubmit}>
      <ArrowIcon sx={{ width: '26px', height: '26px', color: 'black' }}/>
    </IconBackButton>
  );
};

export default BackButton;
