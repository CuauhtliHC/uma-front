import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { BoxButton, IconMoreButton } from '../../statics/styles/button/moreButton.jsx';

const MoreButton = ({ more }) => {
  return (
    <BoxButton>
      <IconMoreButton onClick={more} >
        <MoreHorizIcon />
      </IconMoreButton>
    </BoxButton>
  );
};

export default MoreButton;
