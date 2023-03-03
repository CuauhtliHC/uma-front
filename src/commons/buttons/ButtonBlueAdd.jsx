import React from 'react';
import { MainBoxButtonAdd, ButtonAdd, IconAdd } from '../../statics/styles/button/buttonBlueAdd.jsx';

const ButtonBlueAdd = ({ handleSubmit }) => {
  return (
    <MainBoxButtonAdd>
      <ButtonAdd onClick={handleSubmit}>
        <IconAdd />
      </ButtonAdd>
    </MainBoxButtonAdd>
  );
};

export default ButtonBlueAdd;
