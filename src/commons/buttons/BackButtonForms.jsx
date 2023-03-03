import React from 'react';
import { useNavigate } from 'react-router';
import { BackButtonInForm } from '../../statics/styles/button/backButtonFormsStyle.jsx';

const BackButtonForms = () => {
  const navigate = useNavigate();
  return (
    <BackButtonInForm fullWidth={true} onClick={() => navigate('/login')}>
      Regresar
    </BackButtonInForm>
  );
};

export default BackButtonForms;
